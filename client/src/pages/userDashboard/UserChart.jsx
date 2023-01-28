import React from 'react'

function UserChart({currentCharacters}) {

  return (
    <div className='text-center'>
      <h2 className="font-poppints text-red text-xl p-3">Overview</h2>
      <div className='w-80 bg-white shadow-md h-24 m-3 grid grid-cols-2 grid-rows-3 text-red p-3 place-items-start text-sm items-center'>
        <p className='p-1'>Characters: </p>
        <div className='p-1 place-self-end'>{currentCharacters.length}</div>
        <p className='p-1 '>Adventures: </p>
        <div className='p-1  place-self-end'>0</div>
        <p className='p-1'>Rank:</p>
        <div className='p-1  place-self-end'>{currentCharacters.length * 1}</div>
      </div>
    </div>
  )
}

export default UserChart
