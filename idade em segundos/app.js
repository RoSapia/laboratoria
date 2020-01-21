//perguntar por meio de um prompt
let age = parseInt(prompt("Qual é a sua idade?"));
//Idade em segundos
let ageInSeconds = age*365*24*60*60;

console.log(ageInSeconds);
//Mostrar a idade em segundos na página por meio de document. write
document.write("Em seus "+ age + " de idade, se passaram " +ageInSeconds + " segundos.");
