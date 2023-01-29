import React from 'react'
import Minus from "./Minus";
import Plus from "./Plus";

function Attribute({decrement, increment, nameAtt, count}) {
  return (
      <div className="grid grid-cols-3 p-3 m-3 place-items-center shadow-md w-80 bg-white rounded-lg ">
            <p className="text-red text-xl mb-3 col-span-3">{nameAtt}:</p>
            <button className="text-red hover:text-orange transition-all duration-150" onClick={decrement}><Minus /></button>
            <div className="flex justify-center items-center flex-col">
                <p className="rounded-full  w-18 px-5 py-4 text-2xl text-orange bg-light">{count}</p>
            </div>            
            <button className="text-red hover:text-orange transition-all duration-150" onClick={increment}><Plus /></button>
      </div>
  )
}

export default Attribute
