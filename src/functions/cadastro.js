const productName = document.getElementById('name')
const quantidade = document.getElementById('quantidade')

import renderizarProdutos from './render.js'

const parsedProducts = JSON.parse(localStorage.getItem('produtos'))
nameprodutos.push(parsedProducts)

var nameprodutos = []

function cadastrarProduto(){

    if(productName.value === '',
    isNaN(quantidade.value) === true | quantidade.value === ''){
    
        return window.alert('Campo de pesquisa Invalido')
    
    }

        nameprodutos.push({
            name:(productName.value).toUpperCase(),
            quantidade:quantidade.value,
            id:productName.value + Date.now()
        })

        const parsedProducts = JSON.stringify(nameprodutos)

        localStorage.setItem('produtos',parsedProducts)
        
        productName.value = ''
        quantidade.value = ''
        
}



document.getElementById('add').onclick = cadastrarProduto
export default cadastrarProduto

