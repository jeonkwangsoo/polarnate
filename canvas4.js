//
// canvas4.js
//
function button4clicked() {
const canvas4 = document.getElementById("canvas4");
const context4 = canvas4.getContext("2d");

const cx4 = canvas4.width/2;
const cy4 = canvas4.height/2;

let a4 = 80;
let r4 = 0;
let t4 = 0;
let n4 = 5;



function init4() {
  canvas4.width = canvas4.height;
  context4draw();  
}
function context4draw() {

  context4.fillStyle = "rgb(255,0,0)"; 
  window.setInterval(context4act,10);
}



function context4act() { 
	
	let x4 = cx4 + a4*Math.cos(n4*t4)*Math.cos(t4);
	let y4 = cy4 + a4*Math.cos(n4*t4)*Math.sin(t4);
	
	if(t4<Math.PI) {
	   context4.fillRect(x4,y4,3,3);
	}
	
	t4 = t4 + 0.01;
}
init4();
}
addEventListener("load",button4clicked);


