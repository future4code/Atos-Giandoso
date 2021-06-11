// 1. 10 
// 2. 19 ... 30
// será impresso 4 (*)


//----------------------------------------- 1.



let usuarioPet =Number(prompt('Quantos pets você tem?'))
let perguntasPet = ''
let nomeDosPets = []

if(usuarioPet === 0){
    console.log('Que pena! Você pode adotar um pet!')
}
for(let i = 0; i < usuarioPet; i++){
    
    perguntasPet = (prompt('Qual o nome de seus pets'))
    nomeDosPets.push(perguntasPet)
}

console.log(nomeDosPets)



//----------------------------------------- 2. 

//a.
const arrayOriginal = [11, 20, 31, 40, 51, 60, 71, 80, 91, 101]
function numerosDoArray(arrayNumeos) {
    for(let i = 0; i < arrayNumeos.length; i++){
        console.log(arrayNumeos[i])
    }
}
console.log(arrayOriginal)

//b
const arrayOriginal = [11, 20, 31, 40, 51, 60, 71, 80, 91, 101]
function numerosDoArray(arrayDivisao) {
    for (let i = 0; i < arrayDivisao.length; i++) {
        console.log(arrayDivisao[i] / 10)
    }
}
console.log(arrayOriginal)



// function numerosDoArray(arrayPares){
//     for(let i = 0; i < arrayPares.length; i++) {
//         console.log(arrayPares[i] % 2)
//     }

// }
// console.log(arrayOriginal)

