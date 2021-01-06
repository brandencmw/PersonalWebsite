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
