import cadastrarProduto from './functions/cadastro.js'
//import createSearchField from './functions/create-search-field.js'
import renderizarProdutos from './functions/render.js'

//createSearchField()
cadastrarProduto

const getProducts = JSON.parse(localStorage.getItem('produtos'))
console.log(getProducts)
renderizarProdutos(getProducts)