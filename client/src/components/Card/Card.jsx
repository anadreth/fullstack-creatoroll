import React from 'react'
import { useState } from 'react';

function Card({id, iconPath, name, setSelected, inspectCharacter}) {
    
    const select = () => {
        inspectCharacter(id);
        setSelected(id);
    }
  return (
        <>
            <input className="hidden peer" type="radio" name="character" id={id} value={name}></input>
            <label htmlFor={id} onClick={select} className="overflow-hidden cursor-pointer peer-checked:bg-red peer-checked:text-white peer-checked:hover:bg-orange peer-checked:[&>img]:hidden peer-checked:[&>p]:text-xl m-3 rounded-lg px-1 h-16 group transition-all duration-150 hover:bg-yogurt hover:text-white bg-light shadow-md text-red grid grid-cols-2 place-items-center"> 
                <img src={iconPath} alt={name} htmlFor={id} className="peer-checked:hidden aspect-square w-[35px] h-[40px]" />
                <p className="">{name}</p>
            </label>
        </>
  )
}

export default Card
