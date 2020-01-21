//Perguntar valor do ingresso, custo e porcentagens de impostos
//perguntar as quantidade de ingressos
let quantIngresso = parseInt(prompt("Qual é a quantidade de ingressos?"));
//perguntar custo
let custoIngresso = parseFloat(prompt("Qual o custo dos ingressos?"));
//perguntar porcentagem de impostos
let custoImposto = parseFloat(prompt("Qual a porcentagem de impostos?"));
//Calcula e retorna a receita
let custoTotal = (quantIngresso * custoIngresso);
let receita =  (custoTotal - (custoTotal*(custoImposto/100)));

document.write("A receita é $" + receita);
