function deleteFunction(produtos,id){

    const findedIndex = produtos.findIndex(item => item.id === id)
    const product = produtos[findedIndex]
    const quantity = document.getElementById(`quantidade-number${id}`)
    const divProduct = document.getElementById(`produto${id}`)

    if(!product){
        return console.log("product does not exist")
    }

    if(product.quantidade < 1){
        produtos.splice(findedIndex,1)
        divProduct.remove()
        return;
    }

    else{
        produtos[findedIndex].quantidade--
        quantity.innerHTML = `Quantidade: ${produtos[findedIndex].quantidade}`
    }
    console.log(produtos)
}


export default deleteFunction