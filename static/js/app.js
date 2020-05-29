let tabs = Array.from(document.querySelectorAll(".tabs__link"));
let contents = Array.from(document.querySelectorAll(".tabs__item"));

document.querySelector(".tabs").addEventListener("click", (event) => {
  if (event.target.classList.contains("tabs__link")) {
    let i = tabs.indexOf(event.target);

    tabs.map((tab) => tab.classList.remove("active"));
    tabs[i].classList.add("active");

    contents.map((content) => content.classList.remove("active"));
    contents[i].classList.add("active");
  }
});
