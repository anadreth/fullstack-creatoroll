import React, { useEffect } from 'react'

function Card({id, iconPath, name, displayed, clicked}) {
    if (displayed === undefined) {
        displayed = [{"hello": "hello"}];
    } 
    const character = displayed[0];
    
  return (
    <div>
        <div id={id} className="bg-light m-3 p-3 text-red max-w-md flex justify-around items-center">
            <img src={iconPath} id={id} alt={name} className="filter invert-[70%] sepia-[50%] saturate-[1142%] hue-rotate-314 brightness-[100%] contrast-[100%] aspect-square w-[40px] h-[50px]" />
            <p id={id}>{name}</p>
            <div className='border w-[25px] h-[25px] text-center'>
                <button id={id} onClick={clicked}>V</button>
            </div>
        </div>
        <div className='bg-light m-3 p-3 max-w-md h-auto text-sm' >
            {character.charId}
        </div>
    </div>
  )
}

export default Card
