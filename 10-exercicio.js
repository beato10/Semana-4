//Exercicio 10
const simboloMais = (numeroMais) =>{
  let string = ''                                         //pq pode ser const aqui?????
  for(let cont = 1; cont <= numeroMais; cont++){
    string = string + '+'
  }
  return string
}
console.log(simboloMais(9))