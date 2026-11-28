(function () {
  if (typeof window === "undefined" || window.__ophelDocsLayoutInit) return;
  window.__ophelDocsLayoutInit = true;

  var STORAGE_KEY = "ophel-docs-content-width";
  var DEFAULT_WIDTH = "wide";
  var VALID_WIDTHS = ["standard", "wide", "full"];

  var LABELS = {
    en: {
      menuTitle: "Content width",
      buttonPrefix: "Content width",
      options: {
        standard: { name: "Standard", meta: "720px" },
        wide: { name: "Wide", meta: "960px" },
        full: { name: "Extra wide", meta: "1360px" },
      },
    },
    zh: {
      menuTitle: "页面内容宽度",
      buttonPrefix: "页面宽度",
      options: {
        standard: { name: "标准", meta: "720px" },
        wide: { name: "宽适", meta: "960px" },
        full: { name: "超宽", meta: "1360px" },
      },
    },
  };

  function getLocale() {
    var path = window.location.pathname || "/";
    if (
      path === "/zh" ||
      path.indexOf("/zh/") === 0 ||
      path === "/docs/zh" ||
      path.indexOf("/docs/zh/") === 0
    ) {
      return "zh";
    }
    return "en";
  }

  function readSavedWidth() {
    try {
      var saved = window.localStorage.getItem(STORAGE_KEY);
      if (VALID_WIDTHS.indexOf(saved) !== -1) return saved;
    } catch (_) {}
    return DEFAULT_WIDTH;
  }

  function applyWidth(value, persist) {
    var next = VALID_WIDTHS.indexOf(value) !== -1 ? value : DEFAULT_WIDTH;
    document.documentElement.setAttribute("data-docs-width", next);
    if (persist) {
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch (_) {}
    }
    updateControlState();
  }

  // Apply persisted preference immediately to prevent width flash
  applyWidth(readSavedWidth(), false);

  function syncSinglePageSidebar() {
    var sidebar = document.getElementById("sidebar-content");
    if (!sidebar) {
      document.documentElement.removeAttribute("data-single-page-sidebar");
      return;
    }
    var items = sidebar.querySelectorAll(".sidebar-group li");
    if (items.length === 1) {
      document.documentElement.setAttribute("data-single-page-sidebar", "true");
    } else {
      document.documentElement.removeAttribute("data-single-page-sidebar");
    }
  }

  function createControl() {
    var wrapper = document.createElement("div");
    wrapper.id = "ophel-width-control";
    wrapper.className = "ophel-width-control";
    wrapper.setAttribute("data-open", "false");

    var trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "ophel-width-trigger";
    trigger.setAttribute("aria-haspopup", "menu");
    trigger.setAttribute("aria-expanded", "false");
    trigger.innerHTML =
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<line x1="3" y1="5" x2="3" y2="19"/>' +
      '<line x1="21" y1="5" x2="21" y2="19"/>' +
      '<polyline points="9 9 6 12 9 15"/>' +
      '<polyline points="15 9 18 12 15 15"/>' +
      '<line x1="6" y1="12" x2="18" y2="12"/>' +
      "</svg>";

    var menu = document.createElement("div");
    menu.className = "ophel-width-menu";
    menu.setAttribute("role", "menu");

    var heading = document.createElement("div");
    heading.className = "ophel-width-menu-label";
    menu.appendChild(heading);

    VALID_WIDTHS.forEach(function (mode) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "ophel-width-option";
      btn.setAttribute("role", "menuitemradio");
      btn.setAttribute("data-width-value", mode);
      btn.innerHTML =
        '<span class="ophel-width-option-name"></span>' +
        '<span class="ophel-width-option-meta"></span>';
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        applyWidth(mode, true);
        setMenuOpen(wrapper, false);
      });
      menu.appendChild(btn);
    });

    trigger.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpen = wrapper.getAttribute("data-open") === "true";
      setMenuOpen(wrapper, !isOpen);
    });

    wrapper.appendChild(trigger);
    wrapper.appendChild(menu);
    return wrapper;
  }

  function setMenuOpen(wrapper, open) {
    if (!wrapper) return;
    wrapper.setAttribute("data-open", open ? "true" : "false");
    var trigger = wrapper.querySelector(".ophel-width-trigger");
    if (trigger) {
      trigger.setAttribute("aria-expanded", open ? "true" : "false");
    }
  }

  function updateControlState() {
    var wrapper = document.getElementById("ophel-width-control");
    if (!wrapper) return;
    var locale = getLocale();
    var copy = LABELS[locale] || LABELS.en;
    var current =
      document.documentElement.getAttribute("data-docs-width") || DEFAULT_WIDTH;

    var trigger = wrapper.querySelector(".ophel-width-trigger");
    if (trigger) {
      var activeLabel = (copy.options[current] || copy.options.wide).name;
      var tip = copy.buttonPrefix + ": " + activeLabel;
      trigger.setAttribute("aria-label", tip);
      trigger.setAttribute("title", tip);
    }

    var heading = wrapper.querySelector(".ophel-width-menu-label");
    if (heading) heading.textContent = copy.menuTitle;

    var options = wrapper.querySelectorAll(".ophel-width-option");
    options.forEach(function (btn) {
      var mode = btn.getAttribute("data-width-value");
      var item = copy.options[mode];
      if (!item) return;
      btn.setAttribute("aria-checked", mode === current ? "true" : "false");
      var nameEl = btn.querySelector(".ophel-width-option-name");
      var metaEl = btn.querySelector(".ophel-width-option-meta");
      if (nameEl) nameEl.textContent = item.name;
      if (metaEl) metaEl.textContent = item.meta;
    });
  }

  function mountControl() {
    var themeToggle = document.querySelector(
      '#navbar #theme-preference-menu-trigger, ' +
        '#navbar [data-component-name="theme-preference-menu"], ' +
        '#navbar [data-component-name="theme-toggle"]'
    );
    if (!themeToggle || !themeToggle.parentElement) return;

    var existing = document.getElementById("ophel-width-control");
    if (!existing) {
      existing = createControl();
      themeToggle.parentElement.appendChild(existing);
    } else if (existing.parentElement !== themeToggle.parentElement) {
      themeToggle.parentElement.appendChild(existing);
    }
    updateControlState();
  }

  var scheduled = false;
  function scheduleSync() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(function () {
      scheduled = false;
      syncSinglePageSidebar();
      mountControl();
    });
  }

  document.addEventListener("click", function (e) {
    var wrapper = document.getElementById("ophel-width-control");
    if (!wrapper || wrapper.getAttribute("data-open") !== "true") return;
    if (!wrapper.contains(e.target)) {
      setMenuOpen(wrapper, false);
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      setMenuOpen(document.getElementById("ophel-width-control"), false);
    }
  });

  window.addEventListener("popstate", scheduleSync);

  function startObserver() {
    scheduleSync();
    if (!document.body || typeof MutationObserver === "undefined") return;
    var observer = new MutationObserver(scheduleSync);
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startObserver, { once: true });
  } else {
    startObserver();
  }
})();
