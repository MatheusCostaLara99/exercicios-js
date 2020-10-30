function div(dividendo, divisor){
    return `
    Resultado: ${Math.floor(dividendo/divisor)}
    Resto: ${dividendo%divisor}
    `
}
console.log(div(10,3))