let aumento = (salario,plano) =>{
    switch (plano) {
        case "A":
            return salario + (salario * 0.10)
        case "B":
            return salario + (salario * 0.15)
        case "C":
            return salario + (salario * 0.20)
        default:
            return "plano não reconhecido || erro de parâmetro"
    }
}

console.log(aumento(1000.0,"B"))