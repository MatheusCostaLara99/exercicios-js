const pontuacao = '10 20 20 8 25 3 0 30 1'
function marcador(pontuacao){
    let numeros = []
    let marcaRecorde  = -1
    let partidaPiorPontuacao = 0
    let marcacoesFinais = []

    /* transforma "pontuacao" em um vetor substring e aloca em "vetor" */
    let vetor = pontuacao.split(" ")

    /* transforma "vetor" em um vetor de numeros */
    for(let i=0; i<vetor.length; i++){
        numeros[i] = parseInt(vetor[i])
    }

    /* comppara os recordes e marca em 1qual jogo fez a pior pontuação */
    let compara = 0
    let comparaMenor = 999
    for(let i=0; i<numeros.length; i++){

    /* marca quantas vezes bateu o recorde */
        if(compara<numeros[i]){
            marcaRecorde++
            compara = numeros[i]
        }
        marcacoesFinais[0]= marcaRecorde

        /* marca a partida da pior pontuacao */
        if(comparaMenor>numeros[i]){
            comparaMenor = numeros[i]
            partidaPiorPontuacao = i+1
        }
        marcacoesFinais[1] = partidaPiorPontuacao
    }
    return marcacoesFinais
}

console.log(marcador(pontuacao))



