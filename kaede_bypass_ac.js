// You can leave the tab without noticing teacher (or game dashboard.)
// This script will remove the forced fullscreen mode in Wayground. (The "Full screen mode required" popup will never appear again).
// The script will remove "Your teacher has been alerted that you left the tab." toast message.

;(() => {
  // Delete the blocking element
  let _removal_modaL_container = setInterval(() => {
    const model_container = document.getElementsByClassName("modal-container");
    if (model_container.length > 0) {
      for (const _c_el of model_container) {
        if (_c_el.querySelector(".fullscreen-exit-warning-container")) {
          _c_el.remove();
          clearInterval(_removal_modaL_container);
        }
      }
    }
  }, 250)

  new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
      if (mutation.type !== "childList") return;
      for (const addedNode of mutation.addedNodes) {
        if (addedNode.nodeType !== 1) return;

        // Remove exit fullscreen warning
        if (addedNode.classList.contains("modal-container")) {
          if (addedNode.querySelector(".fullscreen-exit-warning-container")) { addedNode.remove(); }
        }

        // Remove the "Your teacher has been alerted that you left the tab." toast message.
        if (addedNode.classList.contains("toast") && addedNode.classList.contains("toast-alert")) {
          if (addedNode.querySelector(".title") && addedNode.querySelector(".title").innerText?.toString().includes("left the tab")) {
            addedNode.style.display = "none";
          }
        }
      }
    }
  }).observe(document.body, { childList: true, subtree: true });

  // from the login script
  const original_xhr = window.XMLHttpRequest;

  class injected_xhr extends original_xhr {
    xhr_url;
    open(method, url) { this.xhr_url = url; return super.open(method, url); }
    send(body) {
      if (this.xhr_url?.toString().toLowerCase().replaceAll(" ", "").includes("createtestgameactivity")) return;
      return super.send(body);
    }
  }

  window.XMLHttpRequest = injected_xhr;
})();
