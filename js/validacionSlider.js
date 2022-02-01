let n=0;
let slider,bRight,bLeft, size;
slider = document.getElementsByClassName("myimg");
size= slider.length-1;

const show = ()=>{

    bRight= document.getElementById("right");
    bLeft= document.getElementById("left");
    bRight.addEventListener("click" , right);
    bLeft.addEventListener("click", left);
}

const mostrarImagenes = (n) =>{

   for(let i = 0; i<=size ; i++){
        
      slider[i].style.display="none";

   }

   slider[n].style.display="block";

}

const left = ()=>{
   
    if(n>0){
       
        n--;

     }else{

        n=0;
     }

     mostrarImagenes(n);
   

}

const right = ()=>{

   if(n<=size){
           
       n++; 
    }
    
    if(n>size){

       n=size;
    }

   mostrarImagenes(n);

 
}

window.addEventListener("load", show);
