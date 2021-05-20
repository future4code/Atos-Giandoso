//---------------------------------------Hello World------------------------------------------



// ------------------------------------- 1. exercício ----------------------------------------

const nome = prompt("Qual o seu nome?")
const idade = Number (prompt("Qual a sua idade?"))        
console.log(typeof nome)
console.log(typeof idade)
//Quando não utilizamos o comando (Number) na idade, ela será impressa como String        

        
//------------------------------------ 2. exercício -----------------------------------------

let primeiraVez = prompt("Sua primeira vez aqui?")
let temConhecimento = prompt("Tem algum conhecimento mínimo de JavaScript?")
let houveAlguma = prompt("Houve alguma indicação? Nome da pessoa que indicou")
console.log("Olá", nome, "você tem", idade, "anos", "primeira vez?", primeiraVez, "conhecimento em java scrips?", temConhecimento, "gostaria de fazer uma tour?", houveAlguma,)



//----------------------------------- 3. exercício -----------------------------------------
        
let a = 10
let b = 25
let c = a 
a = b
b = c

console.log("O novo valor de a é",a)
console.log("O novo valor de b é", b)







