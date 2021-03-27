function armazenarProdutos(produto){

     console.log(produto)

     if(!localStorage.produtos){
          localStorage.setItem('produtos',produto)
          return console.log(localStorage.produtos)
          
     }

     const copy = localStorage.produtos
     
     localStorage.produtos += {produto:produto}
}

export default armazenarProdutos