/** 
 * Imprimir cada letra da frase em um intervalo de 1/2 segundo
 */
let frase = 'Hoje é sexta feira, sextou, dia de cerveja e café =D';
let i = 0;

function imprimir(){
    console.log(frase[i]);
    i++;

    if(i == frase.length){
        clearInterval(intervalo);
    }
}

let intervalo = setInterval(imprimir, 100);