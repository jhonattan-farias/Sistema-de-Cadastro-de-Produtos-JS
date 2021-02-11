var productName = document.getElementById('name')
var produto = document.getElementById('product')
var produtos = document.getElementById('produtos')
var quantidade = document.getElementById('quantidade')

var nameprodutos = []

function cadastrarProduto(){

    if(productName.value !== '' && quantidade.value !== ''){
        nameprodutos.push({name:productName.value,quantidade:Number(quantidade.value)})

        var newDiv = document.createElement('div')
        produtos.appendChild(newDiv)
        newDiv.id = 'produto'

        var newName = document.createElement('p')
        var theName = document.createTextNode(`Produto: ${productName.value}`)
        newName.appendChild(theName)
        newDiv.appendChild(newName)
        newName.id = 'product-name'

        var newQuantidade = document.createElement('strong')
        var theQuantidade = document.createTextNode(`Quantidade: ${quantidade.value}`)
        newQuantidade.appendChild(theQuantidade)
        newDiv.appendChild(newQuantidade)
        newQuantidade.id = 'quantidade-number'
        
        productName.value = ''
        quantidade.value = ''

        console.log(nameprodutos)
    }
else{
    return window.alert('Campo de pesquisa vazio')    
}
}

document.getElementById('add').onclick = cadastrarProduto