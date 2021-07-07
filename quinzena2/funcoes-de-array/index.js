console.log('Hello World!')

// // Será impresso 3 objetos contendo apelido e nome de cada um dos nomes e apelidos descritos no código
// // Será impresso os nomes e apelidos um abaixo do outro
// // Será impresso todos os nomes e apelidos menos da Leticia Chijo

//  const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const listaNomes = (pet, indice, array) => {
//      return pet.nome
//  }
//  const nomeDosPets = pets.map(listaNomes)
//  console.log(nomeDosPets)

//  //b

//  const racaSalsicha = pets.filter((salsicha) => {
//     return salsicha.raca === "Salsicha"
//  })
//  console.log(racaSalsicha)

//  //c
// // const listaPremio = (raca) =>{
// //     return 'Poodle'
// // }
// // const racaPoodle = pets.map(listaPremio)
// // console.log(racaPoodle)

//2

//a
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const listaNomesProdutos = (produto, indice, array) => {
    return produto.nome
 }

 const nomeDosProdutos = produtos.map(listaNomesProdutos)
 console.log(nomeDosProdutos)

 //b

 //c

 const produtoBebidas = produtos.filter((bebidas) => {
     return bebidas.categoria === "Bebidas"
 })
 console.log(produtoBebidas)

 //d

 //e