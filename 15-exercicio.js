
//Exercicio 15
const receberSomenteOsParesDeIndicesPares = (array) =>{
  const novaArray = []
  for(let cont = 0; cont < array.length; cont += 2){
    if(array[cont] % 2 == 0){
      novaArray.push(array[cont])
    }
  }
  return novaArray
}
console.log(receberSomenteOsParesDeIndicesPares([10,70,22,43]))
