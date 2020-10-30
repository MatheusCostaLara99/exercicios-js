function arredondar(num1, num2){
    let soma = num1+num2
    let result = soma.toFixed(2)
    let resultadoConvertido = result.replace('.', ',')
    console.log(`R$${resultadoConvertido}`)
}

arredondar(0.1,0.2)