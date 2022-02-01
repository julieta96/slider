$(document).ready(()=>{

    let n=0;
    let slider=$(".myimg");
    let size=slider.length-1; 
    let bRight=$("#right");
    let bLeft=$("#left");

   
      bRight.click(()=> {
    
        if(n<=size){
           
            n++; 
        }
    
        if(n>size){

            n=size;
        }
    
        mostrarImagenes(n);
    
      });
    
      bLeft.click(()=>{ 
    
        if(n>0){ 

            n--; 
        }else{ 
            n=0;
        }
    
       mostrarImagenes(n);
    
      });
    
    
    const mostrarImagenes = (n)=>{ 
 
        for (let i =0; i<=size; i++) { 
    
            $(slider[i]).css("display","none"); 
        }

        $(slider[n]).css("display","block"); 
    }

    
});
    
    
    