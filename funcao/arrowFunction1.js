let dobro = function(a){
    return 2*a;
}
dobro = (a) =>{
    return 2*a;
}

dobro = a => 2*a;//return implicito
console.log(dobro(3124));

let ola = function(){
    return 'olá';
}

ola = () => 'Olá';

console.log(ola());