/* Progress Tracker — localStorage based */
const ProgressTracker = {
  STORAGE_KEY: 'ga-notes-progress',

  getAll() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  },

  isDone(topicId) {
    return !!this.getAll()[topicId];
  },

  toggle(topicId) {
    const all = this.getAll();
    if (all[topicId]) {
      delete all[topicId];
    } else {
      all[topicId] = true;
    }
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(all));
    this.updateUI();
    return !!all[topicId];
  },

  getSubjectProgress(subjectId, subjects) {
    const subject = subjects.find(s => s.id === subjectId);
    if (!subject) return { done: 0, total: 0, percent: 0 };
    let total = 0, done = 0;
    const all = this.getAll();
    subject.chapters.forEach(ch => {
      ch.topics.forEach(t => {
        total++;
        if (all[t.id]) done++;
      });
    });
    return { done, total, percent: total ? Math.round((done / total) * 100) : 0 };
  },

  getOverallProgress(subjects) {
    let total = 0, done = 0;
    const all = this.getAll();
    subjects.forEach(s => {
      s.chapters.forEach(ch => {
        ch.topics.forEach(t => {
          total++;
          if (all[t.id]) done++;
        });
      });
    });
    return { done, total, percent: total ? Math.round((done / total) * 100) : 0 };
  },

  updateUI() {
    if (typeof renderSubjectCards === 'function') renderSubjectCards();
    if (typeof renderSidebar === 'function') renderSidebar();
    const overall = this.getOverallProgress(window.GA_SUBJECTS || []);
    const text = document.getElementById('overallProgressText');
    const bar = document.getElementById('overallProgressBar');
    if (text) text.textContent = `${overall.percent}% Complete (${overall.done}/${overall.total})`;
    if (bar) bar.style.width = overall.percent + '%';
  }
};
