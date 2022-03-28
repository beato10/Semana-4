//Exercicio 8
const multiplicar = (mult1, mult2) =>{
  let resultado = 0 
    for(let cont = 1; cont <= mult2; cont++){
      resultado += mult1
    }
      
  return resultado
}
console.log(multiplicar(2,0))