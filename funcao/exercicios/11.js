let anoBissexto = (ano) =>{
    if (ano<=0) {
        return false
    
    //verifica se o ano é bissexto a partir da primeira regra
    }else if(ano % 400 == 0){
        return ('É ano bissexto - '+true)
    //verifica se o ano é bissexto a partir da segunda regra
    }else if(ano % 100 == 0){
        return ('Não é ano bissexto - '+false)
    //verifica se o ano é bissexto pela terceira regra
    }else if (ano % 4 == 0) {
        return ('É ano bissexto - '+true)  
    }else{
        return ('Não é ano bissexto - '+false)
    }
}

console.log(anoBissexto(2020))
console.log(anoBissexto(2021))
console.log(anoBissexto(1600))