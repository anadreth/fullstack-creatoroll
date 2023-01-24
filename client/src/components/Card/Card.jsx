import React, { useState } from 'react'

function Card({id, iconPath, name, setSelected, inspectCharacter}) {
    const [showed, setShowed] = useState(false);

    const show = () => {
        if(showed === false){
            setShowed(true);
        } else {
            setShowed(false);
        } 
    }
    const select = () => {
        inspectCharacter(id);
        setSelected(id);
    }
  return (
    <div>
        <div id={id} className="border-2 bg-light m-3 p-3 shadow-md text-red max-w-md flex justify-around items-center">
            <img src={iconPath} id={id} alt={name} className="aspect-square w-[40px] h-[50px]" />
            <p id={id}>{name}</p>
            <div className='border w-[25px] h-[25px] text-center'>
                <button id={id} onClick={show}>{showed ? "A" : "V"}</button>
            </div>
        </div>
        {showed ? 
        <div className='m-3 p-3 max-w-md h-auto text-sm flex justify-center' >
            <button className='bg-red shadow-md text-light p-3 mx-3' onClick={select}>Select {name}</button>
            <button className='bg-red shadow-md text-light p-3 mx-3'>Update</button>
        </div>
        : <></>}
    </div>
  )
}

export default Card
