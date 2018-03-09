let numero = 0;

function imprimir(){
    console.log(numero);
    numero++;

    if(numero > 10){
        clearInterval(intervalo);
    }
}

// setTimeout(imprimir, 1000);//1000 = 1 segundo

let intervalo = setInterval(imprimir, 500);

//função anônima
// setInterval(function(){

// });