var issoEumaString = 'Isso é uma string';
let issoEumNumero = 42;
const issoEumBooleano = true
let issoTambemEumaString = "42"


if (issoEumNumero === issoTambemEumaString) {
    console.log("As strigs sao iguais");
} else {
    console.log("As strings sao diferentes");
}

console.log(issoEumNumero + issoTambemEumaString);

console.log(issoEumNumero + issoEumNumero);

var issoEumaglobal = "Eu sou uma variavel global";

{
    let issoEumaLocal = "Eu sou uma variavel local";
    console.log(issoEumaglobal);
    console.log(issoEumaLocal);
}

console.log(issoEumaglobal);

let floatvalue1 = 0.06;
let floatvalue2 = 0.01;
let sum = floatvalue1 + floatvalue2;

console.log (sum.toPrecision(2))


for (let i= 0; i < 5; i++) {
    console.log(i)
        console.log(i*2);
}

let j = 0;
while (j < 5)  {    
    console.log (j*2+1)
    j++
} 

console.log(Math.PI)
console.log(Math.E)
console.log(Math.sqrt(16))
console.log(Math.pow(2, 3))
console.log(Math.random ())
console.log(Math.cos(90))


function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt (num); i++) {
        if (num % i === 0) return false;
}
}

for (let i = 1; i <= 100; i++){
    isPrime ? console.log(i) : null
}


