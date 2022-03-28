//Exercicio 21
const menorNumero = (array) =>{
  let min = array[0]
  for(let cont = 0; cont < array.length; cont++){
    if(array[cont] < min){
      min = array[cont]
    }
  }
  return min
}
console.log(menorNumero([10,5,35,65]))

