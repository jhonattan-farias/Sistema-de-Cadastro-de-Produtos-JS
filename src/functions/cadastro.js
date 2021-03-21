const productName = document.getElementById('name')
const quantidade = document.getElementById('quantidade')

import armazenarProdutos from './armazenarProdutos.js'
import renderizarProdutos from './render.js'

function cadastrarProduto(){

    let nameprodutos = ''

    const conditions = 
    isNaN(quantidade.value) === true |
    quantidade.value === '' |
    quantidade.value < 0

        if(productName.value === '', conditions)
        {
        return window.alert('Campo de pesquisa Invalido')
        }

        nameprodutos = [{
            name:(productName.value).toUpperCase(),
            quantidade:quantidade.value,
            id:quantidade.value + Date.now()
        }]

    productName.value = ''
    quantidade.value = ''

        if(!localStorage.produtos){
            armazenarProdutos(JSON.stringify(nameprodutos))
            renderizarProdutos()
            return
        }
        
    armazenarProdutos(JSON.stringify(nameprodutos))
        
    renderizarProdutos()

    nameprodutos = ''
}



document.getElementById('add').onclick = cadastrarProduto
export default cadastrarProduto

