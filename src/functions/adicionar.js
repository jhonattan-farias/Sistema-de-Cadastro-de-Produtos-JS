function addFunction(produtos,id,event){

    const findedProduct = produtos.find(item => item.id === id)

        const quantity = document.getElementById(`quantidade-number${id}`)

        findedProduct.quantidade++

        quantity.innerHTML = `Quantidade: ${findedProduct.quantidade}`
    

    console.log(produtos)
}


export default addFunction