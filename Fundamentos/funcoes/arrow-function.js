//forma convencional
function modelo(nome) {
  return `o nome é${nome}`
}

//forma arrow
let modeloArrow = (nome) => `O nome é ${nome}`

let soma = (num1, num2) => num1 + num2

console.log(modeloArrow('maria'))

//Arrow function com + de 1 linha de instrução
let somaNumeroPequenos = (num1, num2) => {
  if (num1 || num2 > 10) {
    return 'Somente numero de 1 a 9'
  } else {
    return num1 + num2
  }
}
