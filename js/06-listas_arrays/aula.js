const notas = [];

notas.push(7.1);
notas.push(8.9);
notas.push(6.3);

let total = 0;
for (let i = 0; i < notas.length; i++) {
  total += notas[i];
}

const media = total / notas.length;
console.log(media);

