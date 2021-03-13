function armazenarProdutos(produto){

     let storagedProducts = localStorage.getItem('produtos')
     const produtosEmString = JSON.stringify(produto)

     if(storagedProducts == 1){
          //localStorage.setItem('produtos',produtosEmString)
          console.log('that side')
          return
     }
     
     //storagedProducts += produto

     //localStorage.removeItem('produtos')
     //localStorage.setItem('produtos',storagedProducts)
     console.log('im here')

}

export default armazenarProdutos