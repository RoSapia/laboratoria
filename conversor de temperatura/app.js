// Pergunta a temperatura em Graus Celcius
let temperaturaC = parseFloat(prompt("Qual a temperatura em C°quer converter para F°?"));
//Transforma C° em F°
let temperaturaF = (temperaturaC  * 1.8 ) + 32
//Mostra a temperatura convertida
console.log("A temperatura " + temperaturaC + "C°, convertida em F° é " +  temperaturaF);
