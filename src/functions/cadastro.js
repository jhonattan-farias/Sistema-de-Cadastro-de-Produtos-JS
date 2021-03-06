const productName = document.getElementById('name')
const quantidade = document.getElementById('quantidade')

import armazenarProdutos from './armazenarProdutos.js'

import renderizarProdutos from './render.js'

var nameprodutos = []

function cadastrarProduto(){
    
    const conditions = 
    isNaN(quantidade.value) === true |
    quantidade.value === '' |
    quantidade.value < 0

    if(productName.value === '', conditions)
        {
        return window.alert('Campo de pesquisa Invalido')
        }

        nameprodutos.push({
            name:(productName.value).toUpperCase(),
            quantidade:quantidade.value,
            id:productName.value + Date.now()
        })
        
        productName.value = ''
        quantidade.value = ''
        
        armazenarProdutos(nameprodutos)
        renderizarProdutos()
}



document.getElementById('add').onclick = cadastrarProduto
export default cadastrarProduto

