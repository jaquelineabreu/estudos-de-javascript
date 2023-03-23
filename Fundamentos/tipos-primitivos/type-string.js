//String

const texto1 = 'Olá, mundo!'
const texto2 = 'Olá, mundo!'

const citacao = 'Maria disse "Oi!"'

//concatenação (+)
const citacao2 = 'Meu nome é '

const nome = 'Jaque'

console.log(citacao2 + nome)

//codificação de caracteres

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//Comparação de string

const cidade = 'belo horizonte'
const input = 'Belo Horizonte'

const inputMinusculo = input.toLowerCase()

console.log(cidade === inputMinusculo)

const senha = 'minhaSenha123'
console.log(senha.length) // 13 caracteres
