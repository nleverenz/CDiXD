//DOM tags
const allTag = document.querySelector("#all-tag");
const seeTag = document.querySelector("#see-tag");
const playTag = document.querySelector("#play-tag");
const readTag = document.querySelector("#read-tag");
const gItem = document.querySelectorAll(".g-item");


//Functions
function hide() {
for (let i = 0; i {
for (let i = 0; i {
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


function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {
slideIndex = 1;
}
if (n slideIndex = slides.length;
}
for (i = 0; i slides[i].style.display = "none";
}
for (i = 0; i dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex - 1].style.display = "block";
slides[slideIndex - 1].style.zIndex = "-1";
dots[slideIndex - 1].className += " active";
}
