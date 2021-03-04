function createSearchField(){
  const produtos = document.getElementById('produtos')
  const searchInput = document.createElement('input')
 


  produtos.appendChild(searchInput)

  searchInput.id = 'search-input'
  console.log('chegou aqui')
}

export default createSearchField