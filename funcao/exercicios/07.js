function bhaskara(ax2,bx,c){

    const delta = (bx**2) - (4*ax2*c)

    let x1 = (bx*-1) + (Math.sqrt(delta)) / (2*ax2)
    let x2 = (bx*-1) - (Math.sqrt(delta)) / (2*ax2)

    while(x1%2==0 && x2%2==0){
        if(x1%2==0){
            x1 = x1/2
            if(x2%2==0){
                x2 = x2/2
                var parOrdenado = [x1,x2]
            }
            var parOrdenado = [x1,x2] 
        }
    }
    var parOrdenado = [x1,x2] 
    

    if (delta < 0) {
        return "delta é negativo"
    } else {
        return parOrdenado
    }

}
console.log(bhaskara(2,4,2))
