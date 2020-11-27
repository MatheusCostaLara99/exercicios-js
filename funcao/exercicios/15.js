let concessionaria = (automovel) =>{
   switch (automovel) {
       case "hatch":
           console.log("compra efetuada com sucesso")
           break
        case "sedan":
            console.log("tem certeza que não prefere este modelo?")
            break
        case "moto":
            console.log("tem certeza que não prefere este modelo?")
            break
        case "caminhonete":
            console.log("tem certeza que não prefere este modelo?")
            break
       default:
           console.error("erro de parametro | não possuímos esse modelo")
           break
   } 
}

concessionaria("hatch")
concessionaria("sedan")
concessionaria("lancha")