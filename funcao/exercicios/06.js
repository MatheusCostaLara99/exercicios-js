function CalcularJuros(capital,taxaJuros,tempo){
    let montante = 0

    this.jurosSimples = ()=>{
        montante = capital * (1+ (taxaJuros * tempo))
        return montante.toFixed(2)
    }

    this.jurosCompostos = ()=>{
        montante = capital * (Math.pow((1+taxaJuros),tempo))
        return montante.toFixed(2)
    }
}

const juros = new CalcularJuros(2000.0,0.04,4)
console.log(juros.jurosSimples())
console.log(juros.jurosCompostos())
