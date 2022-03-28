//Exercicio 12
const removerPropriedade = (objeto, propriedade) =>{
  let copiaObj = objeto
  delete copiaObj[propriedade]
  return copiaObj
}
console.log(removerPropriedade({a:1, b:2, c:3}, 'a'))
console.log(Object.is(removerPropriedade({a:1, b:2, c:3}, 'a'), {a:1, b:2, c:3}))

