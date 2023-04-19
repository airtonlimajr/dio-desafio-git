//Faça um programa para calcular o valor gasto de combustivel em uma viagem.
// Você terá 3 variaveis: distância, gasto médio do carro por km e valor do combustivel.
// Imprima no console o valor que será gasto de combustivel para realizar a viagem.

const precoEtanol = 5.51;
const precoGasolina = 6.51;
const kmPorLitros = 10;
let distanciaEmKm = 100;
const tipoCombustivel = "gasolina";

if (tipoCombustivel === "etanol") {
  let litrosConsumidos = (distanciaEmKm / kmPorLitros) * precoEtanol;
  console.log(litrosConsumidos.toFixed(2));
} else {
  let litrosConsumidos = (distanciaEmKm / kmPorLitros) * precoGasolina;
  console.log(litrosConsumidos.toFixed(2));
}
