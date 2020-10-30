/* 1)​ Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */
function calculadora(op1,op2){
    return `
    Soma: ${op1 + op2}
    Subtração: ${op1 - op2}
    Multplicação: ${op1 * op2}
    Divisão: ${op1 / op2}` 
    
}

console.log(calculadora(10,2))