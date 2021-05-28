// -----------Exercício de interpretação de código .1

    // unfefined
    // null
    // 11
    // 3
    // lenght 11
    // 9 

//---------------Exercício de interpretação de código .2

    // SUBI NUM ONIBUS EM MIRROCOS <- Frase em toUpperCase e replaceAll no a por i e o lenght é 27



// ---------------Exercício de escrita de código

//1.

const nome =prompt("Qual seu nome?")
const email =prompt("Qual seu e-mail?")

console.log('O e-mail ' + email + ' foi cadastrado com sucesso. Seja bem vinda(o), ' + nome + '!')




//2.

let comidas =['Hamburguer', 'Bacon', 'Churrasco', 'Udon', 'Feijoada']
console.log(comidas)
console.log(`Essas são minhas comidas favoritas ${comidas.toString().replaceAll(',', '\n')}`)
const novaComida = prompt("Escolha sua comida preferida")
comidas[2] = novaComida
console.log(comidas)

//3.

let listaDeTarefas =[]
const primeiraTask =prompt('Primeira tarefa que precisa ser feito hoje')
const segundaTask =prompt('Segunda tarefa que precisa ser feito hoje')
const terceiraTask =prompt('Terceira tarefa que precisa ser feito hoje')
listaDeTarefas.push(primeiraTask, segundaTask, terceiraTask)
console.log(listaDeTarefas)
const indice = prompt("Digite um indice de uma tarefa que você já realizou: 0, 1, ou 2.")
listaDeTarefas.splice(indice, 1)
console.log(listaDeTarefas)
