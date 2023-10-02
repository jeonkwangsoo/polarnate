//
// canvas13.js
//
function button13clicked() {
	
    const canvas13 = document.getElementById("canvas13");
    const context13 = canvas13.getContext("2d");
    
    const cx = canvas13.width/2;
    const cy = canvas13.height/2;
    
    let a = 80;
    let r = 0;
    let t = 0;
    let n = 1/5;   
    
    function init() {
      canvas13.width = canvas13.height;
      context13draw();  
    }
    function context13draw() {
    
      context13.fillStyle = "rgb(255,0,0)"; 
      window.setInterval(context13act,5);
    }
    
    
    
    function context13act() { 
        
        let x = cx + a*Math.cos(n*t)*Math.cos(t);
        let y = cy + a*Math.cos(n*t)*Math.sin(t);
        
        if(t<6*Math.PI) {
           context13.fillRect(x,y,2,2);
        }
        
        t = t + 0.01;
    }
    init();
    }
    addEventListener("load",button13clicked);
    
    