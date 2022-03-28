//Exercicio 13
const filtrarNumeros = (array) =>{
  const arrayNumeros = []
  for(let cont = 0; cont < array.length; cont++){
    if(typeof array[cont] == 'number'){
      arrayNumeros.push(array[cont])
    } 
  }
  return arrayNumeros
}
x = ["Javascript", 1, "3", "Web", 20];
console.log(filtrarNumeros(x))
