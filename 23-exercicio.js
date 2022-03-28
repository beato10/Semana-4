
//Exercicio 23
const contarPalavras = (string) => {
  let totalPalvras = 1
  for (let cont = 0; cont < string.length; cont++) {
    while (string[cont] == ' ') {
      cont++
    }
    if (string[cont + 1] == ' ') {
      totalPalvras += 1
    }
  }
  console.log(totalPalvras)
}
contarPalavras('sou uma frase')
