// 6. Что такое распространение события (Event Propagation)?

function addEvent(el, event, callback, isCapture = false) {
  if (!el || !event || !callback || typeof callback !== "function") return;

  if (typeof el === "string") {
    el = document.querySelector(el);
  }
  el.addEventListener(event, callback, isCapture);
}

addEvent(document, "DOMContentLoaded", () => {
  const child = document.querySelector(".child");
  const parent = document.querySelector(".parent");
  const grandparent = document.querySelector(".grandparent");

  addEvent(
    child,
    "click",
    function (e) {
      console.log("child");
    },
    false
  );

  addEvent(
    parent,
    "click",
    function (e) {
      console.log("parent");
    },
    false
  );

  addEvent(
    grandparent,
    "click",
    function (e) {
      console.log("grandparent");
    },
    false
  );

  addEvent(
    "html",
    "click",
    function (e) {
      console.log("html");
    },
    false
  );

  addEvent(
    document,
    "click",
    function (e) {
      console.log("document");
    },
    false
  );

  addEvent(
    window,
    "click",
    function (e) {
      console.log("window");
    },
    false
  );
});
