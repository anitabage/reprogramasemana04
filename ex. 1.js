// | Exemplo 01 
//Utilize a estrutura de repetição for para imprimir no console conforme instruções:
// a) números de 1 a 50
// b) quando chegar no número 25 interrompa a instrução e pare o loop
// c) quando chegar no número 10 pule a instrução|

console.log("Início")

for(let i = 1; i <= 50; i++){
console.log(i);
}
console.log("1 a 50")

for(let n = 1; n <= 50; n++){
if (n == 25){
    break;
    }
    console.log(n);
}
console.log("Aconteceu o break")

for(let m = 1; m <= 50; m++){
    if (m == 10){
    continue;
    }
    console.log(m);
}


console.log("Fim")

