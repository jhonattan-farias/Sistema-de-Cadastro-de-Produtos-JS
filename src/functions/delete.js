function deleteFunction(props,id){

    const produtos = props
    const productId = id

    const findedProduct = produtos.find(item => item.id === productId)

    if(findedProduct.quantidade > 1 ){
        const quantity = document.getElementById('quantidade-number')
        findedProduct.quantidade--
        quantity.innerHTML = `Quantidade: ${findedProduct.quantidade}`
    }
    else{
    produtos.splice(produtos.findedProduct)
    }
    console.log(produtos)
}


export default deleteFunction