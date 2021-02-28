function deleteFunction(produtos,id){

    const findedIndex = produtos.findIndex(item => item.id === id)
    console.log(findedIndex)

    if(produtos[findedIndex].quantidade < 1 ){
        produtos.splice(produtos[findedIndex])
        console.log(produtos) 
    }

    else{
        const quantity = document.getElementById(`quantidade-number${id}`)
        produtos[findedIndex].quantidade--
        quantity.innerHTML = `Quantidade: ${produtos[findedIndex].quantidade}`
    }
    console.log(produtos[findedIndex].quantidade)
}


export default deleteFunction