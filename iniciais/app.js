//Pedir o nome e sobrenome do usuário
let name = prompt("Por favor digite seu nome e sobrenome:");
//Pegar a primeira inicial
let firstInicial = name.slice(0,1);
//Encontra a posição do espaço
let inicialLastName  = name.indexOf(" ") + 1;

let result = name.slice(inicialLastName,inicialLastName+1);

document.write (firstInicial.toUpperCase()+result.toUpperCase());
