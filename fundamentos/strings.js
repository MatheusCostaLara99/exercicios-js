const escola = "Fatec";
console.log(escola.charAt(2));
console.log(escola.charCodeAt(3));
console.log(escola.indexOf('e')); 

console.log(escola.substring(1));
console.log(escola.substring(0,3));

console.log('Escola '.concat(escola).concat('!'));//pode ser substituido por +
console.log(escola.replace(1, 'o'));

console.log('Ana,Marisa,Pedro'.split(','));