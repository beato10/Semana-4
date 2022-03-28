
//Exercicio 16
const anoBissexto = (ano) => {
  console.log((ano % 4 == 0 || ano % 400 == 0) && ano % 100 != 0)

}
anoBissexto(2100)

