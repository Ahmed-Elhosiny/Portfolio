/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// Theme toggling with persistence and prefers-color-scheme fallback
(function () {
  try {
    var storageKey = 'preferred-theme';
    var root = document.documentElement;
    var toggle = document.getElementById('themeToggle');

    function applyTheme(mode) {
      if (mode === 'dark') {
        root.setAttribute('data-theme', 'dark');
      } else {
        root.removeAttribute('data-theme');
      }
      if (toggle) {
        var isDark = root.getAttribute('data-theme') === 'dark';
        toggle.setAttribute('aria-pressed', String(isDark));
        toggle.innerHTML = isDark ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon"></i>';
      }
    }

    var saved = localStorage.getItem(storageKey);
    if (saved === 'dark' || saved === 'light') {
      applyTheme(saved);
    } else {
      var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(prefersDark ? 'dark' : 'light');
    }

    if (toggle) {
      toggle.addEventListener('click', function () {
        var isDark = root.getAttribute('data-theme') === 'dark';
        var next = isDark ? 'light' : 'dark';
        localStorage.setItem(storageKey, next);
        applyTheme(next);
      });
    }

    // Sync across tabs
    window.addEventListener('storage', function (e) {
      if (e.key === storageKey && e.newValue) {
        applyTheme(e.newValue);
      }
    });
  } catch (e) {
    // no-op
  }
})();


// Fetch and render GitHub repositories for Projects page
(function () {
  var grid = document.getElementById('projectsGrid');
  if (!grid) return;

  var username = 'Ahmed-Elhosiny';
  var loading = document.getElementById('projectsLoading');

  function createCard(repo) {
    var col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-xl-4';

    var article = document.createElement('article');
    article.className = 'project-card';
    article.setAttribute('role', 'listitem');

    var body = document.createElement('div');
    body.className = 'project-body';

    var title = document.createElement('h2');
    title.className = 'h5 fw-bolder mb-2';
    var link = document.createElement('a');
    link.href = repo.html_url;
    link.textContent = repo.name;
    link.target = '_blank';
    link.rel = 'noopener';
    title.appendChild(link);

    var desc = document.createElement('p');
    desc.className = 'text-muted mb-3';
    desc.textContent = repo.description || 'No description provided.';

    var meta = document.createElement('div');
    meta.className = 'project-meta d-flex align-items-center gap-3';
    var lang = document.createElement('span');
    lang.textContent = repo.language || '—';
    var stars = document.createElement('span');
    stars.innerHTML = '<i class="bi bi-star"></i> ' + (repo.stargazers_count || 0);
    var updated = document.createElement('span');
    updated.textContent = new Date(repo.updated_at).toLocaleDateString();
    meta.appendChild(lang);
    meta.appendChild(stars);
    meta.appendChild(updated);

    body.appendChild(title);
    body.appendChild(desc);
    body.appendChild(meta);
    article.appendChild(body);
    col.appendChild(article);
    return col;
  }

  // First fetch the Task-Manager repo details
  Promise.all([
    fetch('https://api.github.com/repos/Ahmed-Elhosiny/Task-Manager').then(r => r.json()),
    fetch('https://api.github.com/users/' + username + '/repos?sort=updated&per_page=9').then(r => r.json())
  ])
    .then(function ([taskManagerRepo, repos]) {
      if (loading) loading.remove();
      if (!Array.isArray(repos)) return;
      
      // Process repositories: exclude the profile config repo and include Task-Manager
      let filteredRepos = repos
        .filter(function (r) { 
          return !r.fork && r.name !== 'Ahmed-Elhosiny';
        });
      
      // Add Task-Manager if it's not already in the list
      if (taskManagerRepo && taskManagerRepo.name === 'Task-Manager' && 
          !filteredRepos.some(r => r.name === 'Task-Manager')) {
        filteredRepos.unshift(taskManagerRepo);
      }
      
      // Display up to 9 repositories
      filteredRepos.slice(0, 9).forEach(function (repo) {
        grid.appendChild(createCard(repo));
      });
    })
    .catch(function () {
      if (loading) loading.textContent = 'Unable to load projects right now.';
    });
})();

// Smooth page transitions
(function () {
  // Check if user prefers reduced motion
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // Handle internal navigation links
  var internalLinks = document.querySelectorAll('a[href^="index.html"], a[href^="resume.html"], a[href^="projects.html"], a[href^="contact.html"]');
  
  internalLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      
      // Only handle internal navigation
      if (href && !href.startsWith('http') && !href.startsWith('#')) {
        e.preventDefault();
        
        // Add exit animation
        document.body.classList.add('page-exit');
        
        // Navigate after animation completes
        setTimeout(function() {
          window.location.href = href;
        }, 300);
      }
    });
  });
})();

// IntersectionObserver reveal effect
(function () {
  var items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(function(el){ observer.observe(el); });
})();