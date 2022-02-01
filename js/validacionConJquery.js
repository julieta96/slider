$(document).ready(function(){

    let n=0;
    let slider=$(".myimg");
    let size=slider.length-1; 
    //le resto el tamaño del array por que length me devuelve 4 y el 1er elemetno del array siempre comienza en la posicion 0
    //hay que restarle el size por que el array empieza a contar desde el 0 y su ultima posición en este caso seria 3
    //si no lo resto con length me va a seguir tirando que todavia hay otro elemento 

    let bRight=$("#right");
    let bLeft=$("#left");

   
      bRight.click(()=> {
    
        if(n<=size){//si n es menor o igual al tamaño de las imagenes q seria 4
           
            n++; //incremento su valor
    
        }
    
    
        if(n>size){ // si n es mayor a tamaño del slider

            n=size; //n = tamaño de la imagen
        }
    
        mostrarImagenes(n);
    
      });
    
      bLeft.click(()=>{ 
    
        if(n>0){ //si n es positivo entonces 

            n--; //decremeto su valor
        }else{ //caso contrario
            n=0; //le asigno el valor 0
        }
    
    
       mostrarImagenes(n);
    
      });
    
    
    const mostrarImagenes = (n)=>{ //paso por paramentro el valor de n
 
        for (let i =0; i<=size; i++) { //recorre el array hasta que i sea menor o igual al size
    
            $(slider[i]).css("display","none"); //oculto las imagenes por su posicion

        }

        $(slider[n]).css("display","block"); // muestro las imagen con posicion valor de n

    }

    
    });
    
    
    