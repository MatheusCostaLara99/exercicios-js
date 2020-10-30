//par nome valor
const saudacao = 'opa'; //contexto lexico 1

function exec(){
    const saudacao = 'faala' //contexto lexico 2
    return saudacao;
}
//objetos são grupos aninhados de pares nome/valor

const cliente={
    nome: 'Pedro',
    idade: 40,
    peso: 90,
    endereco: {
        logradouro: 'rua',
        numero:123 
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);