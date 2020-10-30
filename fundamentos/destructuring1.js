//novo recurso do ES2015
const pessoa = {
    nome: 'Matheus',
    idade: 10,
    endereco:{
        logradouro: 'Rua tal',
        numero : 423
    }
}

const {nome, idade} = pessoa; //tire o nome e a idade do obj pessoa
console.log(nome,idade);

const{nome: n, idade: i} = pessoa;
console.log(n,i);

const {sobrenome, bemHumorada=true} = pessoa;
console.log(sobrenome, bemHumorada);

const {endereco: {logradouro,numero,cep}} = pessoa;
console.log(logradouro,numero,cep);
