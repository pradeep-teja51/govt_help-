/* Search Component */
const SearchEngine = {
  index: [],

  buildIndex(subjects) {
    this.index = [];
    subjects.forEach(subject => {
      subject.chapters.forEach(chapter => {
        chapter.topics.forEach(topic => {
          const plainText = topic.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
          this.index.push({
            topicId: topic.id,
            title: topic.title,
            subjectId: subject.id,
            subjectName: subject.name,
            chapterName: chapter.name,
            searchText: (topic.title + ' ' + plainText).toLowerCase()
          });
        });
      });
    });
  },

  search(query) {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase().trim();
    const words = q.split(/\s+/);
    return this.index
      .filter(item => words.every(w => item.searchText.includes(w)))
      .slice(0, 20)
      .map(item => ({
        ...item,
        highlightedTitle: this.highlight(item.title, q)
      }));
  },

  highlight(text, query) {
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  },

  init() {
    const input = document.getElementById('searchInput');
    const results = document.getElementById('searchResults');
    if (!input || !results) return;

    let debounce;
    input.addEventListener('input', () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        const q = input.value.trim();
        if (q.length < 2) {
          results.classList.add('hidden');
          return;
        }
        const hits = this.search(q);
        if (hits.length === 0) {
          results.innerHTML = '<div class="search-result-item">No topics found</div>';
        } else {
          results.innerHTML = hits.map(h => `
            <div class="search-result-item" data-topic="${h.topicId}" data-subject="${h.subjectId}">
              <div>${h.highlightedTitle}</div>
              <div class="sr-subject">${h.subjectName} → ${h.chapterName}</div>
            </div>
          `).join('');
        }
        results.classList.remove('hidden');
      }, 200);
    });

    results.addEventListener('click', e => {
      const item = e.target.closest('.search-result-item');
      if (item && item.dataset.topic) {
        const query = input.value.trim();
        navigateToTopic(item.dataset.subject, item.dataset.topic, query);
        results.classList.add('hidden');
        input.value = '';
      }
    });

    document.addEventListener('click', e => {
      if (!e.target.closest('.search-wrap')) {
        results.classList.add('hidden');
      }
    });
  }
};
