
//
// canvas3.js
//
function button3clicked() {
	
const canvas3 = document.getElementById("canvas3");
const context3 = canvas3.getContext("2d");

const cx3 = canvas3.width/2;
const cy3 = canvas3.height/2;

let a3 = 80;
let r3 = 0;
let t3 = 0;
let n3 = 4;



function init3() {
  canvas3.width = canvas3.height;
  context3draw();  
}
function context3draw() {

  context3.fillStyle = "rgb(255,0,0)"; 
  window.setInterval(context3act,10);
}



function context3act() { 
	
	let x3 = cx3 + a3*Math.cos(4*t3)*Math.cos(t3);
	let y3 = cy3 + a3*Math.cos(4*t3)*Math.sin(t3);
	
	if(t3<2*Math.PI) {
	   context3.fillRect(x3,y3,2,2);
	}
	
	t3 = t3+ 0.01;
}
init3();
}
addEventListener("load",button3clicked);



