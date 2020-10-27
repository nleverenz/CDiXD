const dots = document.getElementById("dots");
const orange = document.getElementById("orange");
const star = document.getElementById("star");
const picture = document.getElementById("picture");
const svg = document.getElementById("svg");

dots.addEventListener("click", function() {
	picture.style.backgroundImage = "url('dots.png')";
	svg.remove();
  const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg1.setAttribute("width", "100");
  svg1.setAttribute("height", "100");
  const cir1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  cir1.setAttribute("cx", "50");
  cir1.setAttribute("cy", "50");
  cir1.setAttribute("r", "40");
  cir1.setAttribute("fill", "red");
  cir1.classList.add("icon1");
  svg1.appendChild(cir1);
  picture.appendChild(svg1);

});

orange.addEventListener("click", function() {
	picture.style.backgroundImage = "url('orange.png')";
	svg.remove();
  const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg1.setAttribute("width", "100");
  svg1.setAttribute("height", "100");
  const cir1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  cir1.setAttribute("cx", "50");
  cir1.setAttribute("cy", "50");
  cir1.setAttribute("r", "40");
  cir1.setAttribute("fill", "orange");
  cir1.classList.add("icon2");
  svg1.appendChild(cir1);
  picture.appendChild(svg1);

});

star.addEventListener("click", function() {
	picture.style.backgroundImage = "url('star.png')";
	svg.remove();
  const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg1.setAttribute("width", "100");
  svg1.setAttribute("height", "100");
  const cir1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  cir1.setAttribute("cx", "50");
  cir1.setAttribute("cy", "50");
  cir1.setAttribute("r", "40");
  cir1.setAttribute("fill", "yellow");
  cir1.classList.add("icon3");
  svg1.appendChild(cir1);
  picture.appendChild(svg1);
});