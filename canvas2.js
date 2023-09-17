
//
// canvas2.js
//
function button2clicked() {
const canvas2 = document.getElementById("canvas2");
const context2 = canvas2.getContext("2d");

const cx2 = canvas2.width/2;
const cy2 = canvas2.height/2;

let a2 = 80;
let r2 = 0;
let t2 = 0;
let n2 = 3;



function init2() {
  canvas2.width = canvas2.height;
  context2draw();  
}
function context2draw() {

  context2.fillStyle = "rgb(255,0,0)"; 
  window.setInterval(context2act,10);
}



function context2act() { 
	
	let x2 = cx2 + a2*Math.cos(n2*t2)*Math.cos(t2);
	let y2 = cy2 + a2*Math.cos(n2*t2)*Math.sin(t2);
	
	if(t2<2*Math.PI) {
	   context2.fillRect(x2,y2,2,2);
	}
	
	t2 = t2+ 0.01;
}
init2();
}
addEventListener("load",button2clicked);



