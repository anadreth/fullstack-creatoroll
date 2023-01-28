import React from 'react'

function Card({id, iconPath, name, setSelected, inspectCharacter}) {

    const select = () => {
        inspectCharacter(id);
        setSelected(id);
    }
  return (
        <div tabIndex="0" onClick={select}  id={id} className="group h-16 transition-all duration-150 focus:hover:bg-orange focus:text-white focus:bg-red focus:shadow-lg hover:bg-yogurt rounded-full hover:text-white bg-light m-3 p-3 shadow-md text-red max-w-md flex justify-around items-center">
            <img src={iconPath} id={id} alt={name} className="group-focus:hidden aspect-square w-[35px] h-[40px]" />
            <p className="group-focus:text-xl" id={id}>{name}</p>
        </div>
  )
}

export default Card
