function addFunction(produtos,id){

    const findedProduct = produtos.find(item => item.id === id)

        const quantity = document.getElementById(`quantidade-number${id}`)

        findedProduct.quantidade++

        quantity.innerHTML = `Quantidade: ${findedProduct.quantidade}`
    
    console.log('produto adicionado ' +  findedProduct.quantidade)
}


export default addFunction