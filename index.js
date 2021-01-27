var productName = document.getElementById('name')
var produto = document.getElementById('product')
var produtos = document.getElementById('produtos')

var nameprodutos = []

function cadastrarProduto(){

    if(productName.value === ''){
        window.alert('Campo de Pesquisa Vazio!')
    }

    nameprodutos.push({name:productName.value})
    
        var newDiv = document.createElement('div')
        produtos.appendChild(newDiv)

        var newName = document.createElement('p')
        var theName = document.createTextNode(productName.value)
        newName.appendChild(theName)
        newDiv.appendChild(newName)

    productName.value = ''
    
}

document.getElementById('add').onclick = cadastrarProduto