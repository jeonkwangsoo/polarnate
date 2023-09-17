//
// canvas1.js
//
function button1clicked() {
	
const canvas1 = document.getElementById("canvas1");
const context1 = canvas1.getContext("2d");

const cx = canvas1.width/2;
const cy = canvas1.height/2;

let a = 80;
let r = 0;
let t = 0;
let n = 2;

let c = null;


function init() {
  canvas1.width = canvas1.height;
  context1draw();  
}
function context1draw() {

  context1.fillStyle = "rgb(255,0,0)"; 
  window.setInterval(context1act,5);
}



function context1act() { 
	
	let x = cx + a*Math.cos(n*t)*Math.cos(t);
	let y = cy + a*Math.cos(n*t)*Math.sin(t);
	
	if(t<2*Math.PI) {
	   context1.fillRect(x,y,2,2);
	}
	
	t = t + 0.01;
}
init();
}
addEventListener("load",button1clicked);

