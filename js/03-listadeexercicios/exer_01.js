/* 1 - Faça um algorimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calculcale a média final do aluno e
 sua classificação conforme a tabela abaixo:
 Média = ( nota 1 + nota + nota 3 ) / 3;
 Classificação | Média
 Média menor que 5, reprovado;
 Media maior ou igual a 5 e menor que 7, recuperação;
 Media acima de 7, passou de semestre.
*/

let nota1 = 5;
let nota2 = 7;
let nota3 = 8;

let media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
  console.log("Reprovado");
} else if (media >= 5 && media < 7) {
  console.log("Recuperação");
} else {
  console.log("Passou de semestre");
}
