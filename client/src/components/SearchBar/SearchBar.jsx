import React from 'react'

function SearchBar({setSearchBar}) {

   const search = (e) => {
        setSearchBar(e.target.value);
   } 

  return (
    <div>    
        <input type="text" placeholder='search...' id="searchBar" onChange={search}/> 
    </div>
  )
}

export default SearchBar