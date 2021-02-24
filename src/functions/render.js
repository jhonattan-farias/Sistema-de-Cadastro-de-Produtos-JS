const produtos = document.getElementById('produtos')

function renderizarProdutos(nameprodutos){

    produtos.innerHTML = ''
    
        nameprodutos.map(item =>{
      
        const newDiv = document.createElement('div')
        produtos.appendChild(newDiv)
        newDiv.id = 'produto'

        const newName = document.createElement('p')
        const theName = document.createTextNode(`Produto: ${item.name}`)
        newName.appendChild(theName)
        newDiv.appendChild(newName)
        newName.id = 'product-name'

        const newQuantidade = document.createElement('strong')    
        const theQuantidade = document.createTextNode(`Quantidade: ${item.quantidade}`)
        newQuantidade.appendChild(theQuantidade)
        newDiv.appendChild(newQuantidade)
        newQuantidade.id = 'quantidade-number'
        
    })

}

export default renderizarProdutos