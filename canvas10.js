//
// canvas10.js
//
function button10clicked() {
	
    const canvas10 = document.getElementById("canvas10");
    const context10 = canvas10.getContext("2d");
    
    const cx = canvas10.width/2;
    const cy = canvas10.height/2;
    
    let a = 80;
    let r = 0;
    let t = 0;
    let n = 2/3;   
    
    function init() {
      canvas10.width = canvas10.height;
      context10draw();  
    }
    function context10draw() {
    
      context10.fillStyle = "rgb(255,0,0)"; 
      window.setInterval(context10act,5);
    }
    
    
    
    function context10act() { 
        
        let x = cx + a*Math.cos(n*t)*Math.cos(t);
        let y = cy + a*Math.cos(n*t)*Math.sin(t);
        
        if(t<6*Math.PI) {
           context10.fillRect(x,y,2,2);
        }
        
        t = t + 0.01;
    }
    init();
    }
    addEventListener("load",button10clicked);
    
    