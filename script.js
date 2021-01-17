var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var deg = document.querySelector(".degree");
var randomizeButton = document.querySelector(".randomize")

function getRndNumber(max) {
	return Math.floor(Math.random() * Math.floor(max));
  }

  function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
  }
  function rgbToHex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  

  function randomize(){
	color1.value = rgbToHex(getRndNumber(256),getRndNumber(256),getRndNumber(256))
	color2.value = rgbToHex(getRndNumber(256),getRndNumber(256),getRndNumber(256))

	setGradient()
}

function setGradient() {
	body.style.background = 
	"linear-gradient("+deg.value+"deg, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ") no-repeat";
	css.textContent = body.style.background + ";";
}



window.onload = setGradient
deg.addEventListener("input", setGradient)
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomizeButton.addEventListener("click",randomize)