"use strict";
const languagePrevButton = document.querySelector(".carousel-control-prev");
const languageNextButton = document.querySelector(".carousel-control-next");
const languageClasses = [
  "js-style",
  "html-style",
  "css-style",
  "python-style",
  "java-style",
  "vba-style",
  "sql-style",
];
let languageIndex = 0;
let prevIndex;

function changeStyles(former) {
  document
    .getElementsByClassName("languages-container")[0]
    .classList.remove(languageClasses[former]);
  document
    .getElementsByClassName("languages-container")[0]
    .classList.add(languageClasses[languageIndex]);

  document
    .getElementsByClassName("socials-container")[0]
    .classList.remove(languageClasses[former]);
  document
    .getElementsByClassName("socials-container")[0]
    .classList.add(languageClasses[languageIndex]);

  document
    .getElementsByClassName("socials-bar")[0]
    .classList.remove(languageClasses[former]);
  document
    .getElementsByClassName("socials-bar")[0]
    .classList.add(languageClasses[languageIndex]);
}

languageNextButton.addEventListener("click", function () {
  console.log("Testing");
  prevIndex = languageIndex;
  languageIndex =
    languageIndex === languageClasses.length - 1 ? 0 : languageIndex + 1;
  changeStyles(prevIndex);
});

languagePrevButton.addEventListener("click", function () {
  prevIndex = languageIndex;
  languageIndex =
    languageIndex === 0 ? languageClasses.length - 1 : languageIndex - 1;
  changeStyles(prevIndex);
});

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
