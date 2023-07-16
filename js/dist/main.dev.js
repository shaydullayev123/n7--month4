"use strict";

var repo = document.querySelector("#repo");
var main = document.querySelector("#main");

repo.onclick = function (e) {
  e.preventDefault();
  window.location = "repositories.html";
};

main.onclick = function (e) {
  e.preventDefault();
  window.location = "index.html";
};