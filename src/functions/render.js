const divProdutos = document.getElementById('produtos')
import deleteFunction from './delete.js'
import addFunction from './adicionar.js'

function renderizarProdutos(produtos){

    divProdutos.innerHTML = ''
    
        produtos.map(item =>{
      
    //Criando div que irá armazenar os produtos(newDiv)*/
        const newDiv = document.createElement('div')
    //Criando div que irá armazenar nome e quantidade dos Produtos(nameOfProducts)   
        const nameOfProducts = document.createElement('div')

    //inserindo div (nameOfProducts) dentro da div (newDiv)
        divProdutos.appendChild(newDiv)
        newDiv.appendChild(nameOfProducts)

    //dando id as divs
        newDiv.id = 'produto'
        nameOfProducts.id = 'name-of-products'

    //Criando nome do produto, inserindo dentro da div pai
        const newName = document.createElement('p')
        const theName = document.createTextNode(`Produto: ${item.name}`)

    
        newName.appendChild(theName)
        nameOfProducts.appendChild(newName)
        newName.id = 'product-name'

    //criando quantidade do produto, inserindo dentro da div pai
        const newQuantidade = document.createElement('strong')    
        const theQuantidade = document.createTextNode(`Quantidade: ${item.quantidade}`)

        newQuantidade.appendChild(theQuantidade)
        nameOfProducts.appendChild(newQuantidade)
        newQuantidade.id = `quantidade-number${item.id}`

    //criando elemento(deleteButton) e (addButton)
        const deleteButton = document.createElement("button")
        const deleteText = document.createTextNode('Vendido')
        
        const addButton = document.createElement('button')
        const addText = document.createTextNode('adicionar')
    //criando div que irá armazenar deleteButton e addButton
        const buttonDiv = document.createElement('div')

        deleteButton.appendChild(deleteText)
        addButton.appendChild(addText)

        //inserindo deleteButton e addButton dentro do buttonDiv
        buttonDiv.appendChild(deleteButton)
        buttonDiv.appendChild(addButton)
    //inserindo buttonDiv dentro da div principal, dando id aos elementos 
        newDiv.appendChild(buttonDiv)
        buttonDiv.className = 'button-div'
        deleteButton.id = `delete-button${item.id}`
        addButton.id = `add-button${item.id}`

        const sendingPropsToDelete = () => {
            deleteFunction(produtos,item.id)
           }  

        const sendingPropsToAdd = () => {
            addFunction(produtos,item.id)
        }     
    //inserindo um escutador de eventos nos botões
        deleteButton.addEventListener('click',sendingPropsToDelete)
        addButton.addEventListener('click',sendingPropsToAdd)

    })

      
}

export default renderizarProdutos