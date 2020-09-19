var n=-1;
var slider,bRight,bLeft;

function slider(){
    bRight= document.getElementById("right");
    bLeft= document.getElementById("left");
    bRight.addEventListener("click" , right);
    bLeft.addEventListener("click", left);
}

function mostrarImagenes(n){

   slider = document.getElementsByClassName("myimg");

   for(var i = 0; i<slider.length ; i++){
        
      slider[i].style.display="none";

   }

   slider[n].style.display="block";

}

function left(){
    slider = document.getElementsByClassName("myimg");

    if(n>0){
       
        n--;
     }

     if(n==(-1)){
         n=1;
     }

     mostrarImagenes(n);
    /* alert("back");*/

}

function right(){
   slider = document.getElementsByClassName("myimg");

   if(n<=slider.length){
       n++;
   }

   if(n==3){
       n=2;
   }

   mostrarImagenes(n);

   /*alert("next");*/
}

window.addEventListener("load", slider);
