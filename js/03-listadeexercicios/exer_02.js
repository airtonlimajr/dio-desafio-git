/*

O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para 
dar uma indicação sobre a condição de peso de uma pessoa adulta. 

A fórmula é 

IMC = peso / (altura * altura). 

Elabore um algoritmo que leia o peso e a altura de uma pessoa, calcule e mostre seu IMC de acordo com a tabela abaixo:

IMC | Classificação
Abaixo de 18,5 | Abaixo do peso
Entre 18,5 e 24,9 | Peso ideal
Entre 25 e 29,9 | Sobrepeso
Entre 30 e 34,9 | Obesidade grau I
Entre 35 e 39,9 | Obesidade grau II
Acima de 40 | Obesidade graus III e IV

*/

const peso = 80;
const altura = 1.8;
const imc = peso / Math.pow(altura, 2);

console.log(imc);

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 24.9) {
  console.log("Peso ideal");
} else if (imc >= 25 && imc < 29.9) {
  console.log("Sobrepeso");
} else if (imc >= 30 && imc < 34.9) {
  console.log("Obesidade grau I");
} else if (imc >= 35 && imc < 39.9) {
  console.log("Obesidade grau II");
} else {
  console.log("Obesidade graus III e IV");
}
