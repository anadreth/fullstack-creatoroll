import React from 'react'

function Card({id, iconPath, name, setSelected, inspectCharacter}) {

    const select = () => {
        inspectCharacter(id);
        setSelected(id);
    }
  return (
    <div>
        <div onClick={select}  id={id} className=" hover:bg-yogurt rounded-full hover:text-white bg-light m-3 p-3 shadow-md text-red max-w-md flex justify-around items-center">
            <img src={iconPath} id={id} alt={name} className="aspect-square w-[35px] h-[40px]" />
            <p id={id}>{name}</p>
        </div>

    </div>
  )
}

export default Card
