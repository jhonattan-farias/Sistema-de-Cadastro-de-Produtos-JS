var productName = document.getElementById('name').value
var produto = document.getElementById('product')
var produtos = document.getElementById('produtos')
var quantidade = document.getElementById('quantidade').value

var nameprodutos = []

function cadastrarProduto(){

    if(productName !== '' && quantidade !== ''){
        nameprodutos.push({name:productName,quantidade:Number(quantidade)})
        
        productName.value = ''
        quantidade.value = ''
        renderizarProdutos()
        console.log(nameprodutos)
    }
else{
    return window.alert('Campo de pesquisa vazio')    
}
}

function renderizarProdutos(){

    deletar()

    nameprodutos.map(item =>{
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

function deletar(){
    produtos.innerHTML = ''
}

export {productName}

document.getElementById('add').onclick = cadastrarProduto

document.getElementById('apagar').onclick = sendEvent
