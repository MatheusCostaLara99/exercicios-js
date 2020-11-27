let calculadora = (num1, num2, op) =>{
    switch (op) {
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "*":
            return num1 * num2
        case "/":
            return num1 / num2
        default:
            return ("erro de parâmetro | operação não reconhecida")
    }
}

console.log(calculadora(1,2,"+"))