//DOM tags
const allTag = document.querySelector("#all-tag");
const seeTag = document.querySelector("#see-tag");
const playTag = document.querySelector("#play-tag");
const readTag = document.querySelector("#read-tag");
const gItem = document.querySelectorAll(".g-item");

//Functions
function hide() {
  for (let i = 0; i < gItem.length; i++) {
    gItem[i].style.display = "none";
  }
}

//Event listeners
allTag.addEventListener("click", () => {
  for (let i = 0; i < gItem.length; i++) {
    gItem[i].style.display = "grid";
  }
});

seeTag.addEventListener("click", () => {
  hide();
  gItem[1].style.display = "grid";
  gItem[2].style.display = "grid";
  gItem[3].style.display = "grid";
  gItem[8].style.display = "grid";
});

playTag.addEventListener("click", () => {
  hide();
  gItem[4].style.display = "grid";
  gItem[5].style.display = "grid";
  gItem[6].style.display = "grid";
});

readTag.addEventListener("click", () => {
  hide();
  gItem[0].style.display = "grid";
  gItem[7].style.display = "grid";
});

//Slideshow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
