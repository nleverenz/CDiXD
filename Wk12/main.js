const grid = document.querySelector(".grid");
const choice = document.querySelector(".choice");
const header = document.querySelector("header");
const ok = document.querySelector("#ok");
const no = document.querySelector("#no");
const yeb1 = document.querySelector("#yeb1");
const yeb2 = document.querySelector("#yeb2");
const yeb3 = document.querySelector("#yeb3");
const yeb4 = document.querySelector("#yeb4");
const yeb5 = document.querySelector("#yeb5");
const yeb6 = document.querySelector("#yeb6");
const title = document.querySelector("#title");
const fullBtn = document.querySelector("#full-btn");
const body = document.querySelector("body");
const text = document.querySelector(".text");

let poet = false;
let storyText = [
  "On that day, the Yellow Emperor showed off his palace. In a long descent, they had just left the first western terraces, which – like the tiers of an almost unimaginable amphitheatre – slopedown to a paradise whose metal mirrors and interwoven juniper hedges gave a hint of the labyrinth.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, porro.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, porro.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, porro.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, porro.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, porro.",
];

let storyPopText = [
  "On that day, the Yellow Emperor showed off his palace to the poet. In a long descent, they had just left the first western terraces, which – like the tiers of an almost unimaginable amphitheatre – slope down to a paradise whose metal mirrors and interwoven juniper hedges gave a hint of the labyrinth.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt?",
];
let storyTextCounter = 0;

function onStart() {
  grid.style.display = "none";
  fullBtn.style.display = "none";
  title.style.display = "block";
}

//Poet button
ok.addEventListener("click", function () {
  if (ok.innerHTML == "Poet") {
    body.style.backgroundImage = "url('GB.png')";
    body.style.backgroundSize = "cover";
    text.innerHTML = "You are the poet";
    ok.innerHTML = "Emperor";
    no.innerHTML = "Next";
  } else {
    grid.style.display = "grid";
    choice.style.display = "none";
    header.style.display = "none";
  }
});

no.addEventListener("click", function () {
  if (no.innerHTML == "Next") {
    grid.style.display = "grid";
    choice.style.display = "none";
    header.style.display = "none";
  } else {
    body.style.backgroundImage = "url('GB.png')";
    body.style.backgroundSize = "cover";
    text.innerHTML = "You are the poet";
    ok.innerHTML = "Emperor";
    no.innerHTML = "Next";
  }
});

yeb1.addEventListener("click", function () {
  yeFunc(0);
});

yeb2.addEventListener("click", function () {
  yeFunc(1);
});

yeb3.addEventListener("click", function () {
  yeFunc(2);
});

yeb4.addEventListener("click", function () {
  yeFunc(3);
});

yeb5.addEventListener("click", function () {
  yeFunc(4);
});

yeb6.addEventListener("click", function () {
  yeFunc(5);
});

fullBtn.addEventListener("click", function () {
  if (fullBtn.innerHTML == "+Full Story") {
    text.innerHTML = storyPopText[storyTextCounter];
    fullBtn.innerHTML = "-Full Story";
  } else {
    text.innerHTML = storyText[storyTextCounter];
    fullBtn.innerHTML = "+Full Story";
  }
});

function yeFunc(num) {
  grid.style.display = "none";
  choice.style.display = "flex";
  header.style.display = "block";
  title.style.display = "none";
  fullBtn.style.display = "block";
  ok.innerHTML = "Poet";
  no.innerHTML = "Next";
  if (num == 1) {
    storyTextCounter = 1;
    console.log("Test");
  } else if (num == 2) {
    storyTextCounter = 2;
  } else if (num == 3) {
    storyTextCounter = 3;
  } else if (num == 4) {
    storyTextCounter = 4;
  } else if (num == 5) {
    storyTextCounter = 5;
  }
  text.innerHTML = storyText[storyTextCounter];
}

onStart();

