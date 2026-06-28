// ==UserScript==
// @name         New Userscript
/
// @version      2025-10-09
// @description  bypass new wayground's "anti-cheating"
// @author       You
// @match        https://wayground.com/join/game/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wayground.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  (() => { setInterval((() => { const e = document.getElementsByClassName("modal-container"); if (e.length > 0) for (const t of e) t.querySelector(".fullscreen-exit-warning-container") && t.remove() }), 1e3); const e = window.XMLHttpRequest; window.XMLHttpRequest = class extends e { xhr_url; open(e, t) { return this.xhr_url = t, super.open(e, t) } send(e) { if (!this.xhr_url?.toString().toLowerCase().replaceAll(" ", "").includes("createtestgameactivity")) return super.send(e) } } })();
})();
