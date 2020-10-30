/* 2)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

function triangulo(lado1, lado2, lado3){
    try{
        if(lado1>0 && lado2>0 && lado3>0){
            if(lado1 == lado2 && lado2 == lado3 && lado1 == lado3){
                return 'Triângulo equilátero'
            }else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
                return 'Triângulo isósceles'
            }else{
                return 'Triângulo escaleno'
            }
        }else{
            return 'deu ruim'
        }
    }
    catch(exception){
        console.log('deu ruim')
    }
}

console.log(triangulo(1,4,2))