$(document).ready(function(){

    var n=-1;
    var slider=$(".myimg");
    var bRight=$("#right");
    var bLeft=$("#left");
    
      bRight.click(function() {
    
        if(n<=slider.length-1){
           
            n++;
    
        }
    
    
        if(n>slider.length){
            n=slider.length;
        }
    
        if(n==3){
            n=2;
        }
    
    
        mostrarImagenes(n);
    
            });
    
        bLeft.click(function(){ 
    
              
    
        slider=$(".myimg");
    
        if(n>0){
    
            n--;
    
        }
    
        if(n==(-1)){
            n=1;
        }
    
    
       mostrarImagenes(n);
    
    
            });
    
    
        function mostrarImagenes(n){
              
    
        for (var i =0; i<slider.length; i++) {
    
            $(slider[i]).css("display","none");
        }
      
    
      $(slider[n]).css("display","block");
     
    
    }
    
    
    });
    
    
    