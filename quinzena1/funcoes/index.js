
function minhaFuncao(variavel) {
	return variavel * 5
}
minhaFuncao(2)
minhaFuncao(10)
//Será impresso 10 e 50, comigo não foi impresso no console, porém ele irá imprimir da mesma maneira.



let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
// Ele utiliza da da exclusividade da palavra 'cenoura'
// True, True e True



//--------------------------- .1

function imprimirNome(nome, idade, cidade, profissao) {
    const pessoa = 'Meu nome é ' + nome + ' tenho ' + idade + ' anos e moro em ' + cidade + ' e sou ' + profissao
    console.log(pessoa)
}
console.log(imprimirNome('Atos', '29', 'Santo André', 'estudante'))


// --------.2

//.a

function somaDosNumeros(numero1, numero2){
    return soma = (numero1 + numero2)
}
const valorNumero1 = 5
const valorNumero2 = 10

let resultado1 = somaDosNumeros(valorNumero1, valorNumero2)
console.log(resultado1)


//.b

function numeroBooleano(numero1, numero2){
    return booleano(numero1 === numero2)
}
const numero1 = 10
const numero2 = 20

let resultado2 = (numero1 === numero2)
console.log(resultado2)



//.c

par = Number(prompt('Digite um numero'))
function paroOuImpar(par) {
    const resposta = (par % 2) == 0
    return resposta
}
console.log('O numero digitado é par?', paroOuImpar(par))



//.d

mensagem = prompt('Digite umamensagem.')
function receberMensagem(mensagem){
    const frase = mensagem.lenght + " " + mensagem.toUpperCase()
    return frase
}

console.log(receberMensagem(mensagem))





//---------------------- .3

/* const aNumero1 = Number(prompt('Digite um numero'))
const aNumero2 = Number(prompt('Digite outro numero'))

function somarDoisNumeros(aNumero1, aNumero2) {
    const soma = aNumero1 + aNumero2
    return soma
}

function subtrairDoisNumeros(aNumero1, aNumero2) {
    const subtracao = aNumero1 - aNumero2
    return subtracao
}

function multiplicarDoisNumeros(aNumero1, aNumero2) {
    const multiplicacao = aNumero1 * aNumero2
    return multiplicacao
}

function divisaoDoisNumeros(aNumero1, aNumero2) {
    const divisao = aNumero1 / aNumero2
    return divisao
}

console.log('Soma:', somarDoisNumeros())
console.log('Subtração:', subtrairDoisNumeros())
console.log('Multiplicação:', multiplicarDoisNumeros())
console.log('Divisão:', divisaoDoisNumeros()) */


