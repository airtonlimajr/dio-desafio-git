class Pessoa {
  nome;
  idade;
  anoDeNascimento;

  construtor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2023 - idade;
  }

  descrever() {
    console.log(`${this.nome} tem ${this.idade} anos`);
  }
}

const vitor = new Pessoa('Vitor', 20);
console.log(vitor);
