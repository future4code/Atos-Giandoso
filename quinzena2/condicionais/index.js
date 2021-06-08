//      Exercícios de interpretação de código
//      1.

// Serve para retornar o restante da divisão
// Ele passa apenas numeros pares
// Ele não passa numeros impares




//      Exercícios de interpretação de código
//      2.

// O código acima serve para a pessoa fazer uma escolha e retorna o valor da escolha
// 2.25
// Seria impresso o valor de 5 pois está sem o Break e ele pega o valor abaixo



//      Exercícios de escrita de código
//      1.

const maiorIdade =Number(prompt('Qual a sua idade?'))
const menorIdade = 17

if (maiorIdade > menorIdade) {
    console.log('Você pode dirigir!')
} else if (menorIdade !== maiorIdade) {
     console.log('Você não pode dirigir!')
 } else {
     console.log('Você não pode dirigir')
 }

//     2.

// const horarioAluno =(prompt('Você estuda em qual período? M, V, N'))
// const m = 'Bom Dia!'
// const v = 'Boa Tarde!'
// const n = 'Boa Noite!'
// function greeting(m, v, n) {
//     if (m) {
//         return 'Bom Dia!'
//     } if else (v) {
//         return 'Boa Tarde!'
//     } else (n) {
//         return 'Boa Noite!'
//     }
// }
// console.log(greeting(m, v, n))

//     3.

const horarioAluno = prompt('Qual hoário você estuda? M, V, N')

switch (horarioAluno) {
    case 'M':
        console.log('Bom Dia!')
        break
    case 'V':
        console.log('Boa Tarde!')
        break
    case 'N':
        console.log('Boa Noite!')
        break
    default:
        console.log('Não identificamos')
        break
    }


//          4.

const filme = 'Fantasia'

const qualFilme = prompt('Qual gênero do filme vocês irão assistir?')
const ingresso = Number(prompt('Qual o valor do ingresso?'))

function filmeEOingresso(qualFilme, ingresso) {
    if (qualFilme === 'Fantasia') {
        console.log('Bom Filme!')
    } else
    console.log('Escolha outro filme :(')
    if (ingresso <= 15) {
        console.log('Bom Filme!')
    } else
    console.log('Escolha outro filme :(')
}

console.log(filmeEOingresso(qualFilme, ingresso))