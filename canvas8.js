//
// canvas8.js
//
function button8clicked() {
	
    const canvas8 = document.getElementById("canvas8");
    const context8 = canvas8.getContext("2d");
    
    const cx = canvas8.width/2;
    const cy = canvas8.height/2;
    
    let a = 80;
    let r = 0;
    let t = 0;
    let n = 1/2;
    
    function init() {
      canvas8.width = canvas8.height;
      context8draw();  
    }
    function context8draw() {
    
      context8.fillStyle = "rgb(255,0,0)"; 
      window.setInterval(context8act,5);
    }
    
    
    
    function context8act() { 
        
        let x = cx + a*Math.cos(n*t)*Math.cos(t);
        let y = cy + a*Math.cos(n*t)*Math.sin(t);
        
        if(t<4*Math.PI) {
           context8.fillRect(x,y,2,2);
        }
        
        t = t + 0.01;
    }
    init();
    }
    addEventListener("load",button8clicked);
    
    