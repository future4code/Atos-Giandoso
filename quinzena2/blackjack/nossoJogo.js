console.log('Bem-vindo ao BlackJack')


const carta = comprarCarta();
let carta1usuario = comprarCarta();
let carta2usuario = comprarCarta();
let carta1computador = comprarCarta();
let carta2computador = comprarCarta();

let valorUsuario = carta1usuario + carta2usuario

if(confirm('Quer iniciar a rodada?')) {
   console.log('Boa-sorte!')
} else {
   console.log('Que pena!')
}


let pontuacaoUsuario = carta1usuario.valor + carta2usuario.valor
let pontuacaoComputador = carta1computador.valor + carta2computador.valor

console.log('Usuário - cartas:', carta1usuario.texto, carta2usuario.texto, '- pontuação', pontuacaoUsuario)
console.log('Computador - cartas:', carta1computador.texto, carta2computador.texto, '- pontuação', pontuacaoComputador)

if(pontuacaoUsuario > pontuacaoComputador) {
   console.log('Você ganhou')
} else if(pontuacaoUsuario < pontuacaoComputador) {
   console.log('Você perdeu')
} else if(pontuacaoUsuario === pontuacaoComputador) {
   console.log('Empate!')
}

// let comprarMaisCarta = ''
// if (confirm(`Suas cartas são ${carta1usuario} e ${carta2usuario}`)){

// }



// if(pontuacaoUsuario === pontuacaoComputador){
//    return 'Empatou'
// }else {

// }

// if(pontuacaoUsuario > pontuacaoComputador){
//    return 'Você ganhou!'
// } else {

// }

// if(pontuacaoUsuario < pontuacaoComputador){
//    return 'Você perdeu!'
// } else {

// }

// console.log('Usuário - cartas:', carta1usuario.texto, carta2usuario.texto, '- pontuação', pontuacaoUsuario)
// console.log('Computador - cartas:', carta1computador.texto, carta2computador.texto, '- pontuação', pontuacaoComputador) 

// if (pontuacaoUsuario === pontuacaoComputador){
//    console.log('Empate!')
//    } else{

//    }