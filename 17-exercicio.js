//Exercicio 17
const somarNumeros = (array) =>{
  let soma = 0 
    for(let cont = 0; cont < array.length; cont++){
      soma += array[cont]
    }
  return soma
}
console.log(somarNumeros([15,15,15,25]))

