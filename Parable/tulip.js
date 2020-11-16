const grid = document.querySelector(".grid");
const poetGridButton = document.querySelector("#BPoetGrid1");

BPoetGrid1.addEventListener("click", function () {
  toText(0);
});

function toText(num) {
  grid.style.display = "none";

if (num == 1) {
    storyTextCounter = 1;
    
onStart();