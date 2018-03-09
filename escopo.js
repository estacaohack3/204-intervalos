// let numero1 = 2;

// for(let i = 0; i < numero1; i++){
//     let numero2 = numero1;
//     console.log(numero2);
// }

// console.log(numero1);

//bairro = GLOBAL
function rua(){
    let poste = 'aceso';
    let arvore = 'verde';

    function casa(){
        let porta = 'madeira'; 

        function garagem(){
            let eletrodomesticos = {
                freezer: 'Gelado',
            };

            let carro = 'Fusca';
        }

        function cozinha(){
            let eletrodomesticos = {
                fogao: 'Elétrico',
                geladeira: 'Grande',
                torradeira: 'Legal',
            };

            console.log(eletrodomesticos.geladeira);

            function gaveta(){
                let garfo = 'prata';
                let panoDePrato = 'bordado';
            }
        }

        cozinha();
        console.log(porta);        
    }

    console.log(poste);
    casa();
}

rua();