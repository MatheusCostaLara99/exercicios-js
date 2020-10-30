/* class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`meu nome é: ${this.nome}`)
    }
}

const p1= new Pessoa('João')
p1.falar() */


function Pessoa(nome){
    //atributo privado
    this.nome = nome

    //metodo publico
    this.dizerNome = function(){
         console.log(`meu nome é: ${this.nome}`)
    }

}
const p1 = new Pessoa('João')

p1.dizerNome()

