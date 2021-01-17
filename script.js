var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var deg = document.querySelector(".degree")
function setGradient() {
	body.style.background = 
	"linear-gradient("+deg.value+"deg, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ") no-repeat";

	css.textContent = body.style.background + ";";
}

deg.addEventListener("input", setGradient)
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);