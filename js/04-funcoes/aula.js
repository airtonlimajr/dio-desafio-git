function cacularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    return "Peso ideal";
  } else if (imc >= 25 && imc < 29.9) {
    return "Sobrepeso";
  } else if (imc >= 30 && imc < 34.9) {
    return "Obesidade grau I";
  } else if (imc >= 35 && imc < 39.9) {
    return "Obesidade grau II";
  } else {
    return "Obesidade graus III e IV";
  }
}

(function () {
  const peso = 80;
  const altura = 1.8;

  const imc = cacularImc(peso, altura);
  console.log(classificarImc(imc));
})();

