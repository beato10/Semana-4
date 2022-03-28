//Exercicio 7

const estaEntre = (numero, minimo, maximo, inclusivo = false) => {
  if (inclusivo == true)
    console.log(numero <= maximo && numero >= minimo)
  else
    console.log(numero < maximo && numero > minimo)
}
estaEntre(70, 50, 70, true)
