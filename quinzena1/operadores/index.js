//Hello world!

//-------------------------------Exercício 1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

 console.log("d. ", typeof resultado)

// False, False, True, Boolean.

//------------------------------Exercício 2

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
// Será impresso as duas Strings, pois está com o sinal de + que no caso ela vai fazer a concatenação.


//----------------------------Exercício 3

// Para a soma dos números é necessário que transforme as String em Number com o uso do código (Number).


//----------------------------Exercício de escrita em código .1

let suaIdade = Number(prompt("Qual a sua idade?"))
let amigoIdade = Number(prompt("Idade de seu melhor amigo"))

console.log("Sua idade é maior que a do seu amugigo?", suaIdade > amigoIdade)
console.log(suaIdade - amigoIdade)


//---------------------------Exercício de escrita em código .2

let numeroPar = Number(prompt("Digite um numero PAR"))
let resto = numeroPar % 2
console.log(resto)
 //Todo numero par o resultado será 0
//se a pessoa digitar um numero impar o numero será 1

//----------------------------Exercício de escrita em código .3

let suaIdade = Number (prompt("Digite sua idade"))
const idadeEmMeses = suaIdade * 12
const idadeEmDias = suaIdade * 365
const idadeEmHoras = suaIdade * 8760

console.log("Idade em meses:", idadeEmMeses)
console.log("Idade em dias:", idadeEmDias)
console.log("Idade em horas:", idadeEmHoras)

//------------------------Exercício de escrita em código .4

let numer1 =Number(prompt("Digite um numero"))
let numer2 =Number(prompt("Digite outro numero"))

console.log("O primeiro numero é maior que segundo?", (numer1 > numer2))
console.log("O primeiro numero é igual ao segundo?", (numer1 == numer2))
console.log("O primeiro numero é divisível pelo segundo?", (numer1 % numer2))
console.log("O segundo numero é divisível pelo primeiro?", (numer2 % numer1))

//


