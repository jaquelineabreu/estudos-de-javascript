let nome = 'Maria'
let idade = '2023'
let pais = 'Brasil'

//com concatenação
let apresentacao =
  'o nome dela é ' + nome + ' sua idade é ' + idade + ' e nasceu no ' + pais
console.log(apresentacao)

//com template string

apresentacao = `o nome dela é ${nome}, sua idade é ${idade} e nasceu no ${pais}`
console.log(apresentacao)
