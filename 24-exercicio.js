
//Exercicio 24
const contarCaracteres = (caractere, string,) =>{
  let totalCarac = 0
  for(let cont = 0; cont < string.length; cont++){
    if(string[cont] == caractere){
      totalCarac += 1
    }
  }
  return totalCarac
}
console.log(contarCaracteres('r', 'A sorte favorece os audazes'))
console.log(contarCaracteres('c', 'Conhece-te a ti mesmo'))
