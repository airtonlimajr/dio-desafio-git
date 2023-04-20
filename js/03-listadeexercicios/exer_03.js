/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal 
de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código | Condição de pagamento

1 | À vista em dinheiro ou cheque, recebe 10% de desconto
2 | À vista no cartão de crédito, recebe 15% de desconto
3 | Em duas vezes, preço normal de etiqueta sem juros
4 | Em duas vezes, preço normal de etiqueta mais juros de 10%
*/

const preco = 100;
const condicao = 2;

if (condicao === 1) {
  console.log(preco * 0.9);
} else if (condicao === 2) {
  console.log(preco * 0.85);
} else if (condicao === 3) {
  console.log(preco);
} else if (condicao === 4) {
  console.log(preco * 1.1);
} else {
  console.log("Condição inválida");
}
