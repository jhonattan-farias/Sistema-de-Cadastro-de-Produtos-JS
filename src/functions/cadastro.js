const productName = document.getElementById('name')
const quantidade = document.getElementById('quantidade')

import renderizarProdutos from './render.js'

const nameprodutos = []

function cadastrarProduto(){

    if(productName.value === '',
    isNaN(quantidade.value) === true | quantidade.value === ''){
    
        return window.alert('Campo de pesquisa Invalido')
    
    }

        nameprodutos.push({
            name:productName.value,
            quantidade:quantidade.value
        })

        
        productName.value = ''
        quantidade.value = ''

        renderizarProdutos(nameprodutos)
        console.log(nameprodutos) 


}

document.getElementById('add').onclick = cadastrarProduto

export default cadastrarProduto
