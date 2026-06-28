// The running game dashboard won't be notified when you leaves tab
// You can still sending answers without fullscreen
; (() => {
  // Delete the blocking element
  setInterval(() => {
    const model_container = document.getElementsByClassName("modal-container");
    if (model_container.length > 0) {
      for (const _c_el of model_container) {
        if (_c_el.querySelector(".fullscreen-exit-warning-container")) {
          _c_el.remove();
        }
      }
    }
  }, 1000)


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
