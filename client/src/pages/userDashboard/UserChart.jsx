import React from 'react'

function UserChart({currentCharacters}) {

  return (
    <div className="grid grid-cols-2 text-left text-red font-poppins">
      <p className="p-3">Characters:</p>
      <div className="text-right p-3">{currentCharacters.length}</div>
      <p className="p-3">Adventures:</p>
      <div className="text-right p-3">0</div>
    </div>
      
  )
}

export default UserChart
