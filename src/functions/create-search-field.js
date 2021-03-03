function createSearchField(){
  const produtos = document.getElementById('produtos')
  const searchInput = document.createElement('input')
  const searchInputDiv = document.createElement('div')  


  produtos.appendChild(searchInputDiv)
  searchInputDiv.appendChild(searchInput)

  searchInput.id = 'search-input'
  searchInputDiv.className = 'search-input-div'
  console.log('chegou aqui')
}

export default createSearchField