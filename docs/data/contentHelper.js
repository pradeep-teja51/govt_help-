/* Content Helper — builds consistent topic HTML */
window.GA_HELPERS = {
  topic(title, whatIs, body, extras = {}) {
    let html = `<h1>${title}</h1>`;
    html += `<div class="what-is-box"><strong>What is this?</strong> → ${whatIs}</div>`;
    html += body;
    if (extras.simplyPut) {
      html += `<div class="simply-put"><strong>👉 Simply put:</strong> ${extras.simplyPut}</div>`;
    }
    if (extras.dontConfuse) {
      html += `<div class="dont-confuse"><strong>⚠️ Don't Confuse:</strong> ${extras.dontConfuse}</div>`;
    }
    if (extras.examTip) {
      html += `<div class="exam-tip"><strong>💡 Exam Tip:</strong> ${extras.examTip}</div>`;
    }
    if (extras.memoryTrick) {
      html += `<div class="memory-trick"><strong>🧠 Memory Trick:</strong> ${extras.memoryTrick}</div>`;
    }
    if (extras.quickRevision && extras.quickRevision.length) {
      html += `<div class="quick-revision"><strong>📋 Quick Revision:</strong><ul>`;
      extras.quickRevision.forEach(p => { html += `<li>${p}</li>`; });
      html += `</ul></div>`;
    }
    html += `<div class="exam-asks"><strong>❓ Exam asks:</strong> ${extras.examAsk || 'Questions from this topic appear frequently in SSC, Railway, and Banking exams.'}</div>`;
    return html;
  },

  table(headers, rows) {
    let html = `<table class="data-table"><thead><tr>`;
    headers.forEach(h => { html += `<th>${h}</th>`; });
    html += `</tr></thead><tbody>`;
    rows.forEach(row => {
      html += `<tr>`;
      row.forEach(cell => { html += `<td>${cell}</td>`; });
      html += `</tr>`;
    });
    html += `</tbody></table>`;
    return html;
  },

  h2(text) { return `<h2>${text}</h2>`; },
  h3(text) { return `<h3>${text}</h3>`; },
  p(text) { return `<p>${text}</p>`; },
  ul(items) {
    return `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
  },
  ol(items) {
    return `<ol>${items.map(i => `<li>${i}</li>`).join('')}</ol>`;
  }
};
