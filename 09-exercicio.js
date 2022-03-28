//Exercicio 9
const contruirArray = (elementoRepetir, vezesRepetir) =>{
  const array = []                                         //pq pode ser const aqui?????
  for(let cont = 1; cont <= vezesRepetir; cont++){
    array.push(elementoRepetir)
  }
  return array
}
console.log(contruirArray('oi', 3))