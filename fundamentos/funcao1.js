//função sem retorno
function imprimirSoma(a, b){
    console.log(a+b);
}

imprimirSoma(2,3);
imrimirSoma(); //NaN


//função com retorno
function soma (a, b=0){
    return a+b;
}

console.log(soma(2,3));
console.log(soma(2));
console.log(soma());// NaN