//Exercicio 28
const filtrarPorQuantidadeDeDigitos = (array, potenciaDez) =>{
  const digitos = Math.pow(10, potenciaDez - 1)
  const arrayDigitos = []
  for(let cont = 0; cont < array.length; cont++){
    if(array[cont] / digitos >= 1 && array[cont] / digitos < 10){
      arrayDigitos.push(array[cont])
    }
  }
  console.log(arrayDigitos)
}
const array = [5, 9, 1, 125, 11]
filtrarPorQuantidadeDeDigitos(array, 1)
