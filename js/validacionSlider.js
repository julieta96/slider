var n=0;
var slider;
var bRight= document.getElementById("right");
var bLeft= document.getElementById("left");

function slider(){
    bRight.addEventListener("click" , right);
    bRight.addEventListener("click", left);
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

    if(n>=slider.length){
       
        n--;
     }

     mostrarImagenes(n);

}

function right(){
   slider = document.getElementsByClassName("myimg");

   if(n<slider.length || n==0){
       n++;
   }

   mostrarImagenes(n);
}