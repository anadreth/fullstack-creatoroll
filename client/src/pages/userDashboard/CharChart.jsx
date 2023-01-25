import e from 'cors';
import React from 'react'
import { useState } from 'react'
import Pencil from '../../components/Pencil/Pencil'

function CharChart({character}) {
  const [hideName, setHideName] = useState(false);
  const [name, setName] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name);
    setHideName(false);

  }

  
  return (
    <form onSubmit={handleSubmit}>
    <div className='grid grid-cols-3 gap-4 font-poppins text-orange bg-light'>
        <div className='border-red border-2 col-span-3'>
            {!hideName ? <h2>{character.charName}<span><button className='text-red ml-3' onClick={() => setHideName(true)}><Pencil /></button></span></h2> 
            :
            <input className='m-3 text-md' type="text" value={name} onChange={handleName} placeholder={character.charName}></input>
            }
        </div>

        <div>
          <p>{character.background}</p>
        </div>
        <button type='submit'>Save</button>
    </div>
    </form>
  )
}

export default CharChart

