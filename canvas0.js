//
// ex01.js
//
function button0clicked() {
	
    const canvas0 = document.getElementById("canvas0");
    const context0 = canvas0.getContext("2d");
    
    const cx = canvas0.width/2;
    const cy = canvas0.height/2;
    
    let a = 80;
    let t = 0;
    let n = Math.E;    
    
    function init() {
      canvas0.width = canvas0.height;
      context0draw();  
    }
    function context0draw() {
      context0.fillStyle = "rgb(255,0,0)"; 
      window.setInterval(context0act,5);
    }    
    function context0act() { 
        
        let x = cx + a*Math.cos(n*t)*Math.cos(t);
        let y = cy + a*Math.cos(n*t)*Math.sin(t);
        
        if(t<2*Math.PI) {
           context0.fillRect(x,y,2,2);
        }
        else if(t<4*Math.PI) {
            context0.fillStyle = "rgb(0,255,0)";
            context0.fillRect(x,y,2,2);
        }
        else if(t<6*Math.PI) {
            context0.fillStyle = "rgb(0,0,255)";
            context0.fillRect(x,y,2,2);
        }
        else if(t<8*Math.PI) {
            context0.fillStyle = "rgb(31,7,247)";
            context0.fillRect(x,y,2,2);
        }
        else if(t<10*Math.PI) {
            context0.fillStyle = "rgb(255,255,10)";
            context0.fillRect(x,y,2,2);
        }
        else if(t<12*Math.PI) {
            context0.fillStyle = "rgb(247,99,7)";
            context0.fillRect(x,y,2,2);
        }
        else if(t<14*Math.PI) {
            context0.fillStyle = "rgb(100,255,7)";
            context0.fillRect(x,y,2,2);
        }
        else if(t<14*Math.PI) {
            context0.fillStyle = "rgb(10,100,255)";
            context0.fillRect(x,y,2,2);
        }
      
        t = t + 0.01;
    }
    init();
    }
    addEventListener("load",context0act);
    
    