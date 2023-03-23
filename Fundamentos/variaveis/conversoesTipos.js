//Conversão de tipos
//Booleanos

//conversao implicita
let numero = 36
let numeroString = Number('36')

console.log(numero == numeroString)

console.log(numero + numeroString)

//conversão explicita

console.log(numero + numeroString)

var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
  var respostaDeTudo = 3.14
  let idade = 42
  const pi = 29
  console.log(respostaDeTudo, idade, pi)
}
console.log(respostaDeTudo, idade, pi)
