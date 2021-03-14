function armazenarProdutos(produto){
     const produtos = []

     let storagedProducts = localStorage.getItem('produtos')
     const produtosEmString = JSON.stringify(produto)

     if(!storagedProducts){
          localStorage.setItem('produtos',produtosEmString)
          console.log(localStorage.produtos)
          return
     }
     
     JSON.parse(storagedProducts)

     localStorage.removeItem('produtos')
     localStorage.setItem('produtos',storagedProducts)
     console.log(typeof(storagedProducts))

}

export default armazenarProdutos