let fatorial = (num) =>{
    let fatorial = 1
    for(let i = num; i>=2; i--){
        fatorial = fatorial * i  
    }
    return fatorial
}

console.log(fatorial(5))