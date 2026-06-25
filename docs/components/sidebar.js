/* Sidebar Component */
function renderSidebar() {
  const nav = document.getElementById('sidebarNav');
  if (!nav || !window.GA_SUBJECTS) return;

  nav.innerHTML = window.GA_SUBJECTS.map(subject => {
    const prog = ProgressTracker.getSubjectProgress(subject.id, window.GA_SUBJECTS);
    return `
      <div class="subject-group" data-subject="${subject.id}">
        <div class="subject-header" style="border-left-color:${subject.color}" data-subject="${subject.id}">
          <span>${subject.icon || '📖'}</span>
          <span>${subject.name}</span>
          <span style="font-size:0.75rem;color:var(--text-muted)">${prog.percent}%</span>
          <span class="arrow">▶</span>
        </div>
        <div class="chapter-list">
          ${subject.chapters.map(ch => `
            <div class="chapter-group">
              <div class="chapter-header" data-chapter="${ch.id}">
                <span class="arrow">▶</span>
                <span>${ch.name}</span>
              </div>
              <ul class="topic-list">
                ${ch.topics.map(t => `
                  <li class="topic-item" data-subject="${subject.id}" data-topic="${t.id}">
                    <input type="checkbox" ${ProgressTracker.isDone(t.id) ? 'checked' : ''} data-topic-check="${t.id}" onclick="event.stopPropagation()">
                    <span class="topic-label">${t.title}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  // Subject toggle
  nav.querySelectorAll('.subject-header').forEach(el => {
    el.addEventListener('click', () => {
      el.classList.toggle('open');
      el.nextElementSibling.classList.toggle('open');
    });
  });

  // Chapter toggle
  nav.querySelectorAll('.chapter-header').forEach(el => {
    el.addEventListener('click', () => {
      el.classList.toggle('open');
      el.nextElementSibling.classList.toggle('open');
    });
  });

  // Topic click
  nav.querySelectorAll('.topic-item').forEach(el => {
    el.addEventListener('click', e => {
      if (e.target.type === 'checkbox') return;
      navigateToTopic(el.dataset.subject, el.dataset.topic);
    });
  });

  // Checkbox
  nav.querySelectorAll('[data-topic-check]').forEach(cb => {
    cb.addEventListener('change', () => {
      ProgressTracker.toggle(cb.dataset.topicCheck);
    });
  });

  // Highlight active topic
  if (window.currentTopicId) {
    const active = nav.querySelector(`[data-topic="${window.currentTopicId}"]`);
    if (active) {
      active.classList.add('active');
      active.closest('.subject-header')?.classList.add('open');
      active.closest('.chapter-list')?.classList.add('open');
      active.closest('.chapter-header')?.classList.add('open');
      active.closest('.topic-list')?.classList.add('open');
    }
  }
}

function openSidebarSubject(subjectId) {
  const nav = document.getElementById('sidebarNav');
  const group = nav?.querySelector(`[data-subject="${subjectId}"]`);
  if (group) {
    group.querySelector('.subject-header')?.classList.add('open');
    group.querySelector('.chapter-list')?.classList.add('open');
  }
}
