import React from 'react'

function UserChart({currentCharacters}) {

  return (
    <div className="text-red flex flex-col justify-center items-center p-3">
      <div className='flex justify-around items-center mb-3 w-full'>
        <p className="">Characters:</p>
        <p className="">{currentCharacters.length}</p>
      </div>
      <div className='flex justify-around items-center w-full'> 
        <p className="">Adventures:</p>
        <p className="">0</p>
      </div>
    </div>
      
  )
}

export default UserChart
