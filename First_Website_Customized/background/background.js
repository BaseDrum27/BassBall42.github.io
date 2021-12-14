var css = document.querySelector("h3");
var color = document.querySelector(".color");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")
function setGradient() {
	body.style.background = "linear-gradient(to right," + color.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";"; 
}
color.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);