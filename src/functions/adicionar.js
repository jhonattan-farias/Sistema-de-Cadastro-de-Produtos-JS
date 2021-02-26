function addFunction(props,id){

    const produtos = props
    const productId = id

    const findedProduct = produtos.find(item => item.id === productId)

        const quantity = document.getElementById('quantidade-number')
        findedProduct.quantidade++
        quantity.innerHTML = `Quantidade: ${findedProduct.quantidade}`
    

    console.log(produtos)
}


export default addFunction