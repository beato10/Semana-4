//Exercicio 6
const inverso = (inverter) =>{
  if(typeof inverter == 'boolean') console.log(!inverter) 
  else if(typeof inverter == 'number') console.log(inverter*(-1)) 
  else console.log('animal')
}
inverso(true)
inverso(20)
inverso('nada')