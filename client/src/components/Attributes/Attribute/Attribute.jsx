import React from 'react'
import Minus from "./Minus";
import Plus from "./Plus";
import {motion} from "framer-motion"

function Attribute({ decrement, increment, nameAtt, count, delay }) {
  return (
      <motion.div className="grid grid-cols-3 p-3 mb-3 place-items-center shadow-md w-80 bg-white rounded-lg "
        animate={{opacity: [0,1]}}
        transition={{duration: 0.2, delay: delay}}
      >
            <p className="text-red text-xl mb-3 col-span-3">{nameAtt}:</p>
            <button className="text-red hover:text-orange transition-all duration-150" onClick={decrement}><Minus /></button>
            <div className="flex justify-center items-center flex-col">
                <p className="rounded-full  w-18 px-5 py-4 text-2xl text-orange bg-light">{count}</p>
            </div>            
            <button className="text-red hover:text-orange transition-all duration-150" onClick={increment}><Plus /></button>
      </motion.div>
  )
}

export default Attribute
