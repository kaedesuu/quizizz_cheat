// ==UserScript==
// @name         quizizz_cheat_login
/
// @version      2024-09-03
// @description  try to take over the world!
// @author       kaede
// @match        https://wayground.com/join/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wayground.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  ;(() => { const e = window.XMLHttpRequest; const n = e => { let t = typeof e !== "string" ? JSON.stringify(e) : e; try { t = JSON.parse(t) } catch (s) { return false } return typeof t === "object" && t !== null }; const r = prompt("Enter playerId/playerName to join, or fake login as someone else."); class t extends e { send(e) { console.log(e); let t = e; if (n(e)) { const s = JSON.parse(e); if (s && s["playerId"]) { s["playerId"] = r } t = JSON.stringify(s) } return super.send(t) } } window.XMLHttpRequest = t })();
})();
