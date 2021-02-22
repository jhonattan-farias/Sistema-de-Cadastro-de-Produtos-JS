var productName = document.getElementById('name')
var produto = document.getElementById('product')
var produtos = document.getElementById('produtos')
var quantidade = document.getElementById('quantidade')

var nameprodutos = []

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
        renderizarProdutos()
        console.log(nameprodutos) 


}

function renderizarProdutos(){

    produtos.innerHTML = ''
    localStorage.setItem('dados',nameprodutos)
    let storageProducts = JSON.stringify(localStorage.dados)
    
        storageProducts.map(item =>{
      
        var newDiv = document.createElement('div')
        produtos.appendChild(newDiv)
        newDiv.id = 'produto'

        var newName = document.createElement('p')
        var theName = document.createTextNode(`Produto: ${item.name}`)
        newName.appendChild(theName)
        newDiv.appendChild(newName)
        newName.id = 'product-name'

        var newQuantidade = document.createElement('strong')    
        var theQuantidade = document.createTextNode(`Quantidade: ${item.quantidade}`)
        newQuantidade.appendChild(theQuantidade)
        newDiv.appendChild(newQuantidade)
        newQuantidade.id = 'quantidade-number'
        
    })

}

document.getElementById('add').onclick = cadastrarProduto
