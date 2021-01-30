//usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em Js
const obj2 =new Object
console.log(obj2)

//funções construtoras
function Produto (nome, preco, desc){
    this.nome=nome
    this.getPrecoComDesconto = ()=> {
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Caneta', 2.00, 0.25)
const p2 = new Produto('Notebook', 2000.00, 0.10)
console.log(
    p1.getPrecoComDesconto(),
    p2.getPrecoComDesconto()
)

//função factory 
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Matheus', 1500, 3)
console.log(f1.getSalario())