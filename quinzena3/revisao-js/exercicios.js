// EXERCÍCIO 01
function inverteArray(array) {
  const arrayInvertido = array.map((valor, i) => {
    return array[array.length - 1]
  })
}
return arrayInvertido
// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
 let numeroPotencia = []
 for(let i = 0 ; i < array.length; i++){
   if (array[i] % 2 === 0){
     numeroPotencia.push(array[i]**2)
   }
 }
 return numeroPotencia
// }

// EXERCÍCIO 03
function retornaNumerosPares(array) {
let numerosPares = []
for(let i = 0; i < array.length; i++){
  if(array[i] % 2 ===0){
//     numerosPares.push(array[i])
//   }
// }
// return numerosPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  letmaior = 0
  array.forEach((element, index) => {
    if(maior < array[index]) {
      maior = element
    }
  })
return maior
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3
  let respostas = []
  respostas.length = 5
  for(let i = 0; i < respostas.length; i++) {
    switch (i) {
      case 0:
        respostas[i] = (booleano1 && booleano2 && !booleano4)
        break;
      case 1:
        respostas[i] = ((booleano2 || booleano3) || !booleano3)
        break;
      case 2:
        respostas[i] = (booleano2 || booleano3) && (booleano4 || booleano1)
        break;
      case 3:
        respostas[i] = (!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3))
          break;
        default:
          break;
    }
  }
  return respostas
}

// EXERCÍCIO 07
let numero = 3
function retornaNNumerosPares(n) {
  let retornaNumerosPares = []
  for (let i = 0; i < n; i++) {
    retornaNumerosPares.push(i*2)
  }
  return retornaNumerosPares
 
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
//   // return 'Escaleno'
//   // return 'Equilátero'
//   // return 'Isósceles'
  if (a !== b && b !== c && c !== a) {
    return `É um triângulo Escaleno`
  } else if (a === b && b === c && c ===a) {
    return `É um triângulo Equilátero`
  } else if (a === b && a !== c) {
    return `É um triângulo Isósceles`
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
  let maior = num1
  let menor = num1
  if (num2 > maior) {
    maior = num2
  }
  if (num2 < menor) {
    menor = num2
  }
  let Y = maior % menor === 0
  let diferencaNum = Number(maior - menor)
  return { 'maiorNumero': maior, 'maiorDivisivelPorMenor': Y, 'diferenca': diferencaNum }
}

// EXERCÍCIO 10
// const arrayEx10 = [30, 20, 50, 70, 30, 100]
function segundoMaiorEMenor(array) {
  for(let i = 0; i <=array.length -1; i++){
    for(let j = i+1; j <= array.length; j++){
      if(array[i]> array[j]){
        let aux = array[i]
        array[i] = array[j]
        array[j] = aux
      }
    }
  }
  let novoArray = []
  novoArray.push(array[array.length-2])
  novoArray.push(array[1])
  return novoArray
}
segundoMaiorEMenor(arrayEx10)

// EXERCÍCIO 11
function ordenaArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array [j]) {
        let aux = array[i];
        array[i] = array[j];
        array[j] = aux;
      }
    }
  }
  let arrayOrdenada = []
  arrayOrdenada.push(bubbleSort(array))
  return arrayOrdenada
}

// EXERCÍCIO 12
function filmeFavorito() {
  const filmeFavorito = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: [`Meryl Streep`, `Anne Hathaway`, `Emily Blunt`, `Stanley Tucci`]
  }
  return filmeFavorito
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  const chamadaFavorito = filmeFavorito()
  return (`Venha assistir ao filme ${chamadaFavorito.nome}, de ${chamadaFavorito.ano}, dirigido por ${chamadaFavorito.diretor} e estrelado por ${chamadaFavorito.atores.join(', ')}.`)

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: (2 * Number(lado1 + lado2)),
    area: Number(lado1 * lado2)
  }
  return retangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const infoPessoal = {
    ...pessoa,
    nome: 'ANÔNIMO'
  }
  return infoPessoal
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const resultado = arrayDePessoas.filter((param) => {
    return param.idade >= 18
  })
  return resultado
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  function menoresDe18(arrayDePessoas) {
    const resultado = arrayDePessoas.filter((param) => {
      return param.idade < 18
    })
    return resultado
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  function multiplicaArrayPor2(array) {
    const resultado = array.map((param) => {
      return param * 2
    })
    return resultado
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const resultado = multiplicaArrayPor2(array)
  const resultado2 = resultado.map((input) => {
    return input.toString()
  })
  return resultado2
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  const resultado = array.map((input) => {
    if (input % 2 === 0) {
      return `${input} é par`
    } else {
      return `${input} é ímpar`
    }
  })
  return resultado
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const filtroPessoas = pessoas.filter((input) => {
    if ((input.altura >= 1.5) && (input.idade > 14) && (input.idade < 60)) {
      return input
    }
  })
  return filtroPessoas
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const filtroPessoas = pessoas.filter((input) => {
    if (!((input.altura >= 1.5) && (input.idade > 14) && (input.idade < 60))) {
      return input
    }
  })
  return filtroPessoas
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  let checarTrue = false;
  while (!checarTrue) {
    checarTrue = true;
    for (let i = 0; i < consultasNome.length - 1; i++) {
      let nomeSeguinte = consultasNome[i + 1].nome
      let comparaInicial = (consultasNome[i].nome).localeCompare(nomeSeguinte)
      if (comparaInicial === 1) {
        checarTrue = false;
        let tmp = consultasNome[i + 1];
        consultasNome[i + 1] = consultasNome[i];
        consultasNome[i] = tmp;
      }
    }
  }
  return consultasNome;
}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {
  function transformaData(dataParametro) {
    const quebraPalavra = dataParametro.split(`/`)
    let dia = quebraPalavra[0]
    let mes = quebraPalavra[1]
    let ano = quebraPalavra[2]
    let resultado = [ano, mes, dia]
    return resultado
  }


  console.log(`PRIMEIRO PROGRAMA`)

  let checarTrue = false;
  while (!checarTrue) {
    checarTrue = true;
    for (let i = 0; i < consultasData.length - 1; i++) {
      let dataAntes = new Date(transformaData(consultasData[i].dataDaConsulta))
      let dataSeguinte = new Date(transformaData(consultasData[i + 1].dataDaConsulta))
      if (dataSeguinte < dataAntes) {
        checarTrue = false;
        let tmp = consultasData[i + 1];
        consultasData[i + 1] = consultasData[i];
        consultasData[i] = tmp;
      }
    }
  }
  return consultasData;
}

// EXERCÍCIO 20
function calculaSaldo(contas) {
  function calculaSaldo(contas) {
    for (let i=0; i<contas.length; i++){
      let soma
      soma = 0
      for (creditos of contas[i].compras){
        soma += Number(creditos)
      }
      contas[i].saldoTotal = contas[i].saldoTotal - soma
      console.log (contas[i].saldoTotal)
    }
    return contas
}