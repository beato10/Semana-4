
//Exercicio 29
const segundoMaior = (array) =>{
  let max1 = array[0]
  let max2 = array[1]
  if(max1 < max2){
    let aux = max1
    max1 = max2
    max2 = aux
  }

  for(let cont = 2; cont < array.length; cont++){
    if(array[cont] > max1){
      let auxi = max1
      max1 = array[cont]
      max2 = auxi
    }
    else if(array[cont] > max2 && array[cont] <= max1)
      max2 = array[cont]
  }
  console.log(max2)
}
segundoMaior([8, 4, 5, 6])

