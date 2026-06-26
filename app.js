/* Main Application */
window.GA_SUBJECTS = [];
window.currentTopicId = null;
window.currentSubjectId = null;

const MOTIVATION_QUOTES = [
  "Every expert was once a beginner. You CAN do this!",
  "Small steps every day lead to big success in exams!",
  "General Awareness is easy when notes are simple. Start now!",
  "You don't need to be smart. You need to be consistent!",
  "One topic at a time — that's how toppers are made!",
  "Believe in yourself. These notes make GA feel easy!",
  "Today's 30 minutes of study = tomorrow's extra marks!",
  "Simple notes + daily revision = Exam success!"
];

const BOOKMARKS_KEY = 'ga-notes-bookmarks';
const LAST_VISITED_KEY = 'ga-notes-last-visited';
const DARK_MODE_KEY = 'ga-notes-dark-mode';

function initApp() {
  window.GA_SUBJECTS = [
    window.GA_DATA.history,
    window.GA_DATA.polity,
    window.GA_DATA.economy,
    window.GA_DATA.geography,
    window.GA_DATA.staticgk,
    window.GA_DATA.science,
    window.GA_DATA.computers,
    window.GA_DATA.maths,
    window.GA_DATA.reasoning,
    window.GA_DATA.english
  ].filter(Boolean);

  document.getElementById('motivationQuote').textContent =
    MOTIVATION_QUOTES[Math.floor(Math.random() * MOTIVATION_QUOTES.length)];

  initDarkMode();
  SearchEngine.buildIndex(window.GA_SUBJECTS);
  SearchEngine.init();
  renderSidebar();
  renderSubjectCards();
  renderBookmarks();
  renderLastVisited();
  ProgressTracker.updateUI();
  bindEvents();
  handleHashRoute();
}

function bindEvents() {
  document.getElementById('sidebarToggle').addEventListener('click', toggleSidebar);
  document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);
  document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
  document.getElementById('bookmarkBtn').addEventListener('click', toggleBookmark);
  document.getElementById('printBtn').addEventListener('click', () => window.print());
  document.getElementById('backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  window.addEventListener('scroll', () => {
    const btn = document.getElementById('backToTop');
    btn.classList.toggle('visible', window.scrollY > 400);
  });

  window.addEventListener('hashchange', handleHashRoute);
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebarOverlay').classList.toggle('open');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('open');
}

function initDarkMode() {
  if (localStorage.getItem(DARK_MODE_KEY) === 'true') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('darkModeToggle').textContent = '☀️';
  }
}

function toggleDarkMode() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    document.getElementById('darkModeToggle').textContent = '🌙';
    localStorage.setItem(DARK_MODE_KEY, 'false');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('darkModeToggle').textContent = '☀️';
    localStorage.setItem(DARK_MODE_KEY, 'true');
  }
}

function findTopic(subjectId, topicId) {
  const subject = window.GA_SUBJECTS.find(s => s.id === subjectId);
  if (!subject) return null;
  for (const ch of subject.chapters) {
    const topic = ch.topics.find(t => t.id === topicId);
    if (topic) return { subject, chapter: ch, topic };
  }
  return null;
}

function navigateToTopic(subjectId, topicId, searchQuery) {
  const found = findTopic(subjectId, topicId);
  if (!found) return;

  window.currentSubjectId = subjectId;
  window.currentTopicId = topicId;

  localStorage.setItem(LAST_VISITED_KEY, JSON.stringify({ subjectId, topicId, title: found.topic.title }));

  document.getElementById('homepage').classList.add('hidden');
  document.getElementById('topicView').classList.remove('hidden');

  const { subject, chapter, topic } = found;
  document.getElementById('breadcrumb').innerHTML = `
    <span onclick="goHome()">Home</span>
    <span class="sep">→</span>
    <span onclick="navigateToTopic('${subject.id}','${chapter.topics[0].id}')">${subject.name}</span>
    <span class="sep">→</span>
    <span>${chapter.name}</span>
    <span class="sep">→</span>
    <span>${topic.title}</span>
  `;

  let contentHtml = topic.content;
  if (searchQuery && searchQuery.length >= 2) {
    const regex = new RegExp(`(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    contentHtml = contentHtml.replace(regex, '<mark class="search-highlight">$1</mark>');
  }

  const article = document.getElementById('topicContent');
  article.innerHTML = `<div class="note-card" style="border-left-color:${subject.color}">${contentHtml}</div>`;

  updateBookmarkBtn();
  renderSidebar();
  closeSidebar();
  window.scrollTo({ top: 0 });
  window.location.hash = `${subjectId}/${topicId}`;
}

function goHome() {
  document.getElementById('homepage').classList.remove('hidden');
  document.getElementById('topicView').classList.add('hidden');
  window.currentTopicId = null;
  window.location.hash = '';
  renderSubjectCards();
  renderLastVisited();
}

window.navigateToTopic = navigateToTopic;
window.goHome = goHome;

function handleHashRoute() {
  const hash = window.location.hash.replace('#', '');
  if (!hash) {
    goHome();
    return;
  }
  const [subjectId, topicId] = hash.split('/');
  if (subjectId && topicId) navigateToTopic(subjectId, topicId);
}

function renderSubjectCards() {
  const container = document.getElementById('subjectCards');
  if (!container) return;

  container.innerHTML = window.GA_SUBJECTS.map(s => {
    const prog = ProgressTracker.getSubjectProgress(s.id, window.GA_SUBJECTS);
    const topicCount = s.chapters.reduce((a, c) => a + c.topics.length, 0);
    return `
      <div class="subject-card" style="border-top-color:${s.color}" data-subject="${s.id}">
        <h3>${s.icon || ''} ${s.name}</h3>
        <div class="card-meta">${s.chapters.length} chapters · ${topicCount} topics</div>
        <div class="card-progress">
          <div class="progress-bar"><div class="progress-fill" style="width:${prog.percent}%;background:${s.color}"></div></div>
          <span>${prog.percent}% done (${prog.done}/${prog.total})</span>
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.subject-card').forEach(card => {
    card.addEventListener('click', () => {
      const subject = window.GA_SUBJECTS.find(s => s.id === card.dataset.subject);
      if (subject && subject.chapters[0]?.topics[0]) {
        navigateToTopic(subject.id, subject.chapters[0].topics[0].id);
        openSidebarSubject(subject.id);
      }
    });
  });
}

function getBookmarks() {
  try { return JSON.parse(localStorage.getItem(BOOKMARKS_KEY)) || []; }
  catch { return []; }
}

function toggleBookmark() {
  if (!window.currentTopicId) return;
  const bookmarks = getBookmarks();
  const key = `${window.currentSubjectId}/${window.currentTopicId}`;
  const idx = bookmarks.findIndex(b => b.key === key);
  if (idx >= 0) bookmarks.splice(idx, 1);
  else {
    const found = findTopic(window.currentSubjectId, window.currentTopicId);
    if (found) bookmarks.push({ key, subjectId: window.currentSubjectId, topicId: window.currentTopicId, title: found.topic.title, subjectName: found.subject.name });
  }
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  updateBookmarkBtn();
  renderBookmarks();
}

function updateBookmarkBtn() {
  const btn = document.getElementById('bookmarkBtn');
  if (!btn || !window.currentTopicId) return;
  const key = `${window.currentSubjectId}/${window.currentTopicId}`;
  const isBookmarked = getBookmarks().some(b => b.key === key);
  btn.textContent = isBookmarked ? '★' : '☆';
  btn.classList.toggle('active', isBookmarked);
}

function renderBookmarks() {
  const list = document.getElementById('bookmarksList');
  const bookmarks = getBookmarks();
  if (!bookmarks.length) {
    list.innerHTML = '<p class="empty-msg">No bookmarks yet. Open any topic and click ☆ to save it.</p>';
    return;
  }
  list.innerHTML = bookmarks.map(b => `
    <div class="bookmark-chip" data-subject="${b.subjectId}" data-topic="${b.topicId}">
      ${b.subjectName}: ${b.title}
    </div>
  `).join('');
  list.querySelectorAll('.bookmark-chip').forEach(chip => {
    chip.addEventListener('click', () => navigateToTopic(chip.dataset.subject, chip.dataset.topic));
  });
}

function renderLastVisited() {
  const el = document.getElementById('lastVisited');
  try {
    const last = JSON.parse(localStorage.getItem(LAST_VISITED_KEY));
    if (last) {
      el.classList.remove('hidden');
      el.innerHTML = `📖 <strong>Continue where you left off:</strong> ${last.title}`;
      el.onclick = () => navigateToTopic(last.subjectId, last.topicId);
    } else {
      el.classList.add('hidden');
    }
  } catch {
    el.classList.add('hidden');
  }
}

document.addEventListener('DOMContentLoaded', initApp);
