//
//   canvas7.js
//
function button6clicked() {
	
const canvas7 = document.getElementById("canvas7");
const context7 = canvas7.getContext("2d");

const cx = canvas7.width/2;
const cy = canvas7.height/2;

let a = 80;
let r = 0;
let t = 0;
let n = Math.SQRT2;

let c = null;


function init() {
  canvas7.width = canvas7.height;
  context7draw();  
}
function context7draw() {

  context7.fillStyle = "rgb(255,0,0)"; 
  window.setInterval(context7act,5);
}

function context7act() { 
	
	let x = cx + a*Math.cos(n*t)*Math.cos(t);
	let y = cy + a*Math.cos(n*t)*Math.sin(t);
	
	if(t<30*Math.PI) {
	   context7.fillRect(x,y,2,2);
	}
	
	t = t + 0.01;
}
init();
}
addEventListener("load",button6clicked);
