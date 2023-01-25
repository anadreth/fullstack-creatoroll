import React from 'react'
import Minus from "./Minus";
import Plus from "./Plus";

function Attribute({decrement, increment, nameAtt, count}) {
  return (
    <div>
      <div className="flex justify-between items-center p-3 m-3 shadow-md w-80 bg-white ">
            <button className="text-red" onClick={decrement}><Minus /></button>
            <div className="flex justify-center items-center flex-col">
                <p className="text-red text-xl mb-3">{nameAtt}:</p>
                <p className="rounded-full  w-18 px-5 py-4 text-2xl text-orange bg-light">{count}</p>
            </div>            
            <button className="text-red" onClick={increment}><Plus /></button>
        </div>
    </div>
  )
}

export default Attribute
