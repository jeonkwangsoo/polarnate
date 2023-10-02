//
// canvas14.js
//
function button14clicked() {
	
    const canvas14 = document.getElementById("canvas14");
    const context14 = canvas14.getContext("2d");
    
    const cx = canvas14.width/2;
    const cy = canvas14.height/2;
    
    let a = 80;
    let r = 0;
    let t = 0;
    let n = 2/5;   
    
    function init() {
      canvas14.width = canvas14.height;
      context14draw();  
    }
    function context14draw() {
    
      context14.fillStyle = "rgb(255,0,0)"; 
      window.setInterval(context14act,5);
    }
    
    
    
    function context14act() { 
        
        let x = cx + a*Math.cos(n*t)*Math.cos(t);
        let y = cy + a*Math.cos(n*t)*Math.sin(t);
        
        if(t<10*Math.PI) {
           context14.fillRect(x,y,2,2);
        }
        
        t = t + 0.01;
    }
    init();
    }
    addEventListener("load",button14clicked);
    
    