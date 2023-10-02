//
// canvas12.js
//
function button12clicked() {
	
  const canvas12 = document.getElementById("canvas12");
  const context12 = canvas12.getContext("2d");
  
  const cx = canvas12.width/2;
  const cy = canvas12.height/2;
  
  let a = 80;
  let r = 0;
  let t = 0;
  let n = 3/4;   
  
  function init() {
    canvas12.width = canvas12.height;
    context12draw();  
  }
  function context12draw() {
  
    context12.fillStyle = "rgb(255,0,0)"; 
    window.setInterval(context12act,5);
  }
  
  
  
  function context12act() { 
      
      let x = cx + a*Math.cos(n*t)*Math.cos(t);
      let y = cy + a*Math.cos(n*t)*Math.sin(t);
      
      if(t<12*Math.PI) {
         context12.fillRect(x,y,2,2);
      }
      
      t = t + 0.01;
  }
  init();
  }
  addEventListener("load",button12clicked);
  
  