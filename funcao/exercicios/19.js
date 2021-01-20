function lanchonete(codigo, qtde){
    switch (codigo) {
        case 100:
            console.log("cachorro quente - total: "+ (qtde*3.00))
            break
        case 200:
            console.log("hamburger simples - total: "+ (qtde*4.00))
            break
        case 300:
            console.log("cheeseburguer - total: "+ (qtde*5.50))
            break
        case 400:
            console.log("baurú - total: "+ (qtde*7.50))
            break
        case 500:
            console.log("refrigerante - total: "+ (qtde*3.50))
            break
        case 600:
            console.log("suco - total: "+ (qtde*2.80))
            break
        default:
            console.error("produto não existente")
            break
    }
}

lanchonete(300,4)