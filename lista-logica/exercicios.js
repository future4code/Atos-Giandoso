// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const num3  = prompt('Numero 3')
  const num5 = prompt('Numero 5')

  console.log((num3) * (num5))

}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const num2020 = prompt('Ano de 2020')
  const num1990 = prompt('sua idade atual')

  console.log((num2020) - (num1990))

}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  let PesoKg =(prompt("Qual seu peso"))
  let Altura =(prompt("Qual sua altura"))
  let imc = (PesoKg/(Altura*Altura))
  console.log(imc)

}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome =prompt("Seu nome")
  const idade =prompt(Number("Sua idade"))
  const email = prompt("informe seu email")

  console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + ".")
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  let corUm =prompt("qual sua cor preferira.")
  let corDois =prompt("Qual sua segunda cor preferida.")
  let corTres =prompt("Qual sua terceira cor preferida.")

  console.log([corUm, corDois, corTres +""])
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  let text =prompt('oi')
  console.log(text.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const num3000 =prompt('3000')
  const num30 =prompt('30')

  console.log((num3000) / (num30))

}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  //  const string1 =prompt('Escreva uma String')
  //  const string2 =prompt('Escreva outra String')

  //  Boolean = ('string1' % 'string2')

  //  console.log(Boolean)
  


}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  let string1 = prompt('Digite uma palavra')
  let string2 = prompt('Digite outra palavra')

  let string1M = string1.toUpperCase()
  let string2M = string2.toUpperCase()

  const comparacao = string1M == string2M
  console.log(comparacao)

}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual = prompt('Insira o ano atual')
  const anoNascimento = prompt('Insira o ano do seu nascimento')
  const rg = prompt('Insira o ano em que sua carteira de identidade foi emitida')

  const idade = anoAtual - anoNascimento
  const emissao = anoAtual - rg

  console.log((idade<=20&&emissao>=5)||(idade>20&&idade<=50&&emissao>=10)||(idade>50&&emissao>=15))


}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui

  const anoAtualmente = Number(prompt('Em que ano estamos?'))
  const resultado = (anoAtualmente % 400 === 0) || (anoAtualmente % 4 == 0 && anoAtualmente % 100 != 0)

  console.log(resultado)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  let suaIdade = (prompt('você tem mais de 18 anos?'))
  let ensinoMedio = (prompt('Você possui o ensino médio completo?'))
  let disponivel = (prompt('Você tem displonibilidade exclusiva durante os horários do curso'))

  console.log(suaIdade && ensinoMedio && disponivel)

}