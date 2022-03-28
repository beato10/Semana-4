
//Exercicio 22
const funcaoDaSorte = (numero) =>{
  let sorteado = Math.ceil(Math.random()*(10) + 0)
  console.log(sorteado)
  if(numero == sorteado){
    console.log('parabens')
  }
  else    {
    console.log('que pena')
  }
}
funcaoDaSorte(2)
