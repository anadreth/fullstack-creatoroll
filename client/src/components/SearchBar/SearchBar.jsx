import React from 'react'
import { motion} from 'framer-motion'

function SearchBar({setSearchBar}) {
    let filterTimeout;

   const search = (e) => {
    clearTimeout(filterTimeout)
    
    if (!e.target.value) return setSearchBar("");

    filterTimeout = setTimeout(() => {
      setSearchBar(e.target.value);
    }, 500)
  } 

  return (
      <motion.div className='px-3 pb-3 z-0'
        layout
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{duration: 0.2}}
      >    
          <input className="p-3 shadow-md rounded-lg w-80 focus:outline-none" type="text" placeholder='search...' id="searchBar" onChange={search}/> 
      </motion.div>
  )
}

export default SearchBar