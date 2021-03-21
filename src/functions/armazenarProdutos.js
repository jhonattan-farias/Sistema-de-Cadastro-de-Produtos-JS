function armazenarProdutos(produto){

     console.log(produto)

     if(!localStorage.produtos){
          localStorage.setItem('produtos',produto)
          return console.log(localStorage.produtos)
          
     }

     localStorage.removeItem('produtos')

     localStorage.setItem('produtos',produto)
}

export default armazenarProdutos