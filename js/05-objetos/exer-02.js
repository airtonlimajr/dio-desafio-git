class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC() {
    return this.peso / (this.altura * this.altura);
  }

  classificarImc() {
    const imc = this.calcularIMC();
    if (imc < 18.5) {
      return "Magreza";
    } else if (imc < 24.9) {
      return "Normal";
    } else if (imc < 30) {
      return "Sobrepeso";
    } else if (imc < 39.9) {
      return "Obesidade";
    } else {
      return "Obesidade Grave";
    }
  }
}

const vitor = new Pessoa("Vitor", 80, 1.8);
console.log(vitor.classificarImc());
