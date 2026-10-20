/**
 * Swastik Yadav Portfolio & Resume
 * Interactivity: Theme toggle (Auto / Light / Dark), Email copy with toast, Print trigger
 */

(function () {
  'use strict';

  // --- Theme Mode Logic (Light & Dark Only, Light is default) ---
  function getStoredTheme() {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' ? 'dark' : 'light';
  }

  function renderThemeIcon(theme) {
    const toggleBtn = document.querySelector('[data-theme-toggle]');
    if (!toggleBtn) return;

    // Sun icon when in dark mode (click to switch to light)
    // Moon icon when in light mode (click to switch to dark)
    const isDark = theme === 'dark';
    const svgIcon = isDark
      ? `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>`
      : `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>`;

    toggleBtn.innerHTML = svgIcon;
    toggleBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    toggleBtn.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    renderThemeIcon(theme);
  }

  function initTheme() {
    const currentTheme = getStoredTheme();
    applyTheme(currentTheme);

    const toggleBtn = document.querySelector('[data-theme-toggle]');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const activeTheme = getStoredTheme();
        const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', nextTheme);
        applyTheme(nextTheme);
      });
    }
  }

  // --- Copy Email with Toast ---
  function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${message}</span>
    `;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }

  function initEmailCopy() {
    const copyBtns = document.querySelectorAll('[data-copy-email]');
    copyBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const email = btn.getAttribute('data-copy-email') || 'swastik15.work@gmail.com';
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(email).then(() => {
            showToast(`Copied ${email}`);
          }).catch(() => {
            window.location.href = `mailto:${email}`;
          });
        } else {
          window.location.href = `mailto:${email}`;
        }
      });
    });
  }

  // --- Print Trigger ---
  function initPrint() {
    const printBtns = document.querySelectorAll('[data-action-print]');
    printBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.print();
      });
    });
  }

  // Initialize all features once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initTheme();
      initEmailCopy();
      initPrint();
    });
  } else {
    initTheme();
    initEmailCopy();
    initPrint();
  }
})();
