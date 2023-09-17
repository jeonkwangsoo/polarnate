//
//   canvas6.js
//
function button6clicked() {
	
const canvas6 = document.getElementById("canvas6");
const context6 = canvas6.getContext("2d");

const cx = canvas6.width/2;
const cy = canvas6.height/2;

let a = 80;
let r = 0;
let t = 0;
let n = Math.PI;

let c = null;


function init() {
  canvas6.width = canvas6.height;
  context6draw();  
}
function context6draw() {

  context6.fillStyle = "rgb(255,0,0)"; 
  window.setInterval(context6act,5);
}

function context6act() { 
	
	let x = cx + a*Math.cos(n*t)*Math.cos(t);
	let y = cy + a*Math.cos(n*t)*Math.sin(t);
	
	if(t<20*Math.PI) {
	   context6.fillRect(x,y,2,2);
	}
	
	t = t + 0.01;
}
init();
}
addEventListener("load",button6clicked);
