//armazenando uma funcção em uma variavel
const imprimirSoma = function(a,b){
    console.log(a+b);
}
imprimirSoma(2,3);

 //armazenando uma função arrow em uma variável
 const soma = (a,b) =>{
     return a+b;
 }

 console.log(soma(3,4));

 //retorno implicito
 const subtracao = (a,b) => a-b;
console.log(subtracao(3,2));