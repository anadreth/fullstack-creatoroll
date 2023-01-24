import React from 'react'

function SearchBar({setSearchBar}) {

   const search = (e) => {
        setSearchBar(e.target.value);
   } 

  return (
    <div className='px-3 pb-3'>    
        <input className="p-3 shadow-md w-80" type="text" placeholder='search...' id="searchBar" onChange={search}/> 
    </div>
  )
}

export default SearchBar