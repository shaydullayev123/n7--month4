const repo = document.querySelector("#repo");
const main = document.querySelector("#main");

repo.onclick = (e) => {
  e.preventDefault();
  window.location = "repositories.html";
};

main.onclick = (e) => {
  e.preventDefault();
  window.location = "index.html";
};
