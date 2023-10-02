//
// canvas9.js
//
function button9clicked() {
	
    const canvas9 = document.getElementById("canvas9");
    const context9 = canvas9.getContext("2d");
    
    const cx = canvas9.width/2;
    const cy = canvas9.height/2;
    
    let a = 80;
    let r = 0;
    let t = 0;
    let n = 1/3;   
    
    function init() {
      canvas9.width = canvas9.height;
      context9draw();  
    }
    function context9draw() {
    
      context9.fillStyle = "rgb(255,0,0)"; 
      window.setInterval(context9act,5);
    }
    
    
    
    function context9act() { 
        
        let x = cx + a*Math.cos(n*t)*Math.cos(t);
        let y = cy + a*Math.cos(n*t)*Math.sin(t);
        
        if(t<4*Math.PI) {
           context9.fillRect(x,y,2,2);
        }
        
        t = t + 0.01;
    }
    init();
    }
    addEventListener("load",button9clicked);
    
    