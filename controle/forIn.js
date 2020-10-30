const notas = [7.8, 9.4, 7.6, 10, 8.2];

for (let i in notas){
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Lara',
    idade: 21,
    peso: 92
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`); //percorrer os atributos do objeto
}