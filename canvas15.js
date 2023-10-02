//
// canvas15.js
//
function button15clicked() {
	
    const canvas15 = document.getElementById("canvas15");
    const context15 = canvas15.getContext("2d");
    
    const cx = canvas15.width/2;
    const cy = canvas15.height/2;
    
    let a = 80;
    let r = 0;
    let t = 0;
    let n = 3/5;   
    
    function init() {
      canvas15.width = canvas15.height;
      context15draw();  
    }
    function context15draw() {
    
      context15.fillStyle = "rgb(255,0,0)"; 
      window.setInterval(context15act,5);
    }
    
    
    
    function context15act() { 
        
        let x = cx + a*Math.cos(n*t)*Math.cos(t);
        let y = cy + a*Math.cos(n*t)*Math.sin(t);
        
        if(t<6*Math.PI) {
           context15.fillRect(x,y,2,2);
        }
        
        t = t + 0.01;
    }
    init();
    }
    addEventListener("load",button15clicked);
    
    