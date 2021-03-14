function armazenarProdutos(produto){
     
     const produtoEmString = JSON.stringify(produto)

     if(!localStorage.produtos){

          localStorage.setItem('produtos',produtoEmString)
          return console.log(localStorage.produtos)
          
     }

     localStorage.setItem('produtos',produtoEmString)

     console.log(localStorage.produtos)
}

export default armazenarProdutos