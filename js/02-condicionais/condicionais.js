let numero = 3;

const eNumeroPar = numero % 2 === 0;

if(numero === 0) {
  console.log("Zero");
} else if (eNumeroPar) {
  console.log("Par");
} else {
  console.log("Impar");
}
