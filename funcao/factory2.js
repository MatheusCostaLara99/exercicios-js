const produto = (nome,preco) => {
    return {
        nome: nome,
        preco: preco,
        desconto: preco - (preco*0.5)
    }
}

const iProduto = produto('cadeira gamer', 1000)

console.log(`
    Nome: ${iProduto.nome}
    preco: ${iProduto.preco}
    preco c/desconto: ${iProduto.desconto}
`)