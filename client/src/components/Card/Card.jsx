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
        <div onClick={show} id={id} className=" hover:bg-yogurt hover:text-white bg-light m-3 p-3 shadow-md text-red max-w-md flex justify-around items-center">
            <img src={iconPath} id={id} alt={name} className="aspect-square w-[40px] h-[50px]" />
            <p id={id}>{name}</p>
            <div className=' w-[25px] h-[25px] text-center'>
                <button id={id} >{!showed ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
                }</button>
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
