$(document).ready(function(){

    var n = -1;
    var bRight = $("#right");
    var bLeft = $("#left");
    var slider = $(".myimg");

    bRight.click(function(){

        if(n<=slider.lenght-1){
            n++;
        }

        if(n>slider.lenght){
            n=slider.lenght;
        }

        if(n==3){
            n=2;
        }

        mostrarImagenes(n);

    })

    

    bLeft.click(function(){

        if(n>0){

            n--;

        }

        if(n==(-1)){
            n=1;
        }

       mostrarImagenes(n);

    })


    
})

function mostrarImagenes(n){

       for(var i =0 ; i=slider.lenght ; i++){
            
            $(slider[i]).css("display" , "none");
        }

        $(slider[n]).css("display", "block");
    
}