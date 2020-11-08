function classificarAluno(nota){
    let notaArredondada = arredondar(nota)
    if(nota<38){
        console.log("reprovado com nota: "+notaArredondada)
    }else{
        console.log("aprovado com nota: "+notaArredondada)
    }
}

function arredondar(nota){
    if(nota%5 >2){
        return nota + (5 - (nota % 5))
    }else{
        return nota
    }
}

classificarAluno(43)
classificarAluno(48)