//com parametro
function soma(num1, num2) {
  return num1 + num2
}

console.log(soma(1, 1))

function nomeIdade(nome, idade) {
  return `Meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade(12, 'Maria'))

function multiplica(num1, num2 = 1) {
  return num1 * num2
}

console.log(multiplica(soma(1, 2)))
