function deleteFunction(produtos,id){

    const findedProduct = produtos.find(item => item.id === id)

    if(findedProduct.quantidade = -1 ){
        produtos.splice(findedProduct)
    } 

    else{
        const quantity = document.getElementById(`quantidade-number${id}`)
        findedProduct.quantidade--
        quantity.innerHTML = `Quantidade: ${findedProduct.quantidade}`
    }
    
}


export default deleteFunction