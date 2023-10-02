//
// canvas11.js
//
function button11clicked() {
	
  const canvas11 = document.getElementById("canvas11");
  const context11 = canvas11.getContext("2d");
  
  const cx = canvas11.width/2;
  const cy = canvas11.height/2;
  
  let a = 80;
  let r = 0;
  let t = 0;
  let n = 1/4;   
  
  function init() {
    canvas11.width = canvas11.height;
    context11draw();  
  }
  function context11draw() {
  
    context11.fillStyle = "rgb(255,0,0)"; 
    window.setInterval(context11act,5);
  }
  
  
  
  function context11act() { 
      
      let x = cx + a*Math.cos(n*t)*Math.cos(t);
      let y = cy + a*Math.cos(n*t)*Math.sin(t);
      
      if(t<8*Math.PI) {
         context11.fillRect(x,y,2,2);
      }
      
      t = t + 0.01;
  }
  init();
  }
  addEventListener("load",button11clicked);
  
  