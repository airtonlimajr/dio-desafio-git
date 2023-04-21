const { gets, print } = require("./funcoes-auxiliares");

const sorteados = [];

for (let i = 0; i < 5; i++) {
  const numeroSorteado = gets();
  sorteados.push(numeroSorteado);
}

let maiorValor = 0;

for (let i = 0; i < sorteados.length; i++) {
  const numeroSorteado = sorteados[i];
  if (numeroSorteado > maiorValor) {
    maiorValor = numeroSorteado;
  }
}

print(maiorValor);
