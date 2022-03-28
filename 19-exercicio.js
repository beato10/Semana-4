//Exercicio 19
const calcularMedia = (array) =>{
  let soma = 0 
    for(let cont = 0; cont < array.length; cont++){
      soma += array[cont]
    }
  return soma / array.length
}
console.log(calcularMedia([15,15,15,15]))
