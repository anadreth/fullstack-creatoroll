import React from 'react'

function SearchBar({setSearchBar}) {
    let filterTimeout;

   const search = (e) => {
    clearTimeout(filterTimeout)
    
    if (!e.target.value) return setSearchBar("");

    filterTimeout = setTimeout(() => {
      console.log(e.target.value)
      setSearchBar(e.target.value);
    }, 500)
  
   } 

  return (
    <div className='px-3 pb-3 '>    
        <input className="p-3 shadow-md rounded-lg w-80 focus:outline-none" type="text" placeholder='search...' id="searchBar" onChange={search}/> 
    </div>
  )
}

export default SearchBar