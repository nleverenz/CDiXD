var x = 1;
function myFunction() {
  if (x == 1) {
    document.getElementById("myImg").src = "I2.jpg";
    x++;
  } else if (x == 2) {
    document.getElementById("myImg").src = "I3.jpg";
    x++;
  } else if (x == 3) {
    document.getElementById("myImg").src = "I4.jpg";
    x = 1;
  }
}