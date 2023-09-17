//
// canvas5.js
//
function button5clicked() {
	
const canvas5 = document.getElementById("canvas5");
const context5 = canvas5.getContext("2d");

const cx = canvas5.width/2;
const cy = canvas5.height/2;

let a = 80;
let r = 0;
let t = 0;
let n = Math.E;

let c = null;


function init() {
  canvas5.width = canvas5.height;
  context5draw();  
}
function context5draw() {

  context5.fillStyle = "rgb(255,0,0)"; 
  window.setInterval(context5act,5);
}



function context5act() { 
	
	let x = cx + a*Math.cos(n*t)*Math.cos(t);
	let y = cy + a*Math.cos(n*t)*Math.sin(t);
	
	if(t<20*Math.PI) {
	   context5.fillRect(x,y,2,2);
	}
	
	t = t + 0.01;
}
init();
}

addEventListener("load",button5clicked);



