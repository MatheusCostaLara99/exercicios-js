//coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['Marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4', 
    valor: 89000, 
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    },{
       nome: 'Paulo',
       idade: 45 
    }],
    calcularValorSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000
delete carro.calcularValorSeguro
delete carro.condutores
delete carro.proprietario.endereco

console.log(carro)