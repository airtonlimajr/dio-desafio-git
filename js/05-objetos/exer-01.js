class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }

  calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
    return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
  }
}

const gol = new Carro("Volkswagen", "Branco", 1 / 10);
const uno = new Carro("Fiat", "Vermelho", 1 / 12);
console.log(gol.calcularGastoDePercurso(100, 5));
