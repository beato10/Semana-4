//Exercicio 4
const nomeDoMes = (numeroDoMes = 1) => {
  const nome = ['janeiro', 'fevereiro', 'março', 'abril',
    'maio', 'junho', 'julho', 'agosto',
    'setembro', 'outubro', 'novembro', 'dezembro']

  return nome[numeroDoMes - 1]
}
console.log(nomeDoMes(9))