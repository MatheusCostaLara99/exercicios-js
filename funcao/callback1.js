const fabicantes = ["cacau show", "nestlé", "lacta"];

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`);
}

fabicantes.forEach(imprimir);