import React from 'react'

function Card({id, iconPath, name, setSelected, inspectCharacter}) {

    const select = () => {
        inspectCharacter(id);
        setSelected(id);
    }
  return (
        <div tabIndex="0" onClick={select}  id={id} className="m-3 rounded-lg px-1 h-16 group transition-all duration-150 focus:hover:bg-orange focus:text-white focus:bg-red focus:shadow-lg hover:bg-yogurt hover:text-white bg-light shadow-md text-red grid grid-cols-2 place-items-center">
            <img src={iconPath} id={id} alt={name} className="group-focus:hidden aspect-square w-[35px] h-[40px]" />
            <p className="group-focus:text-xl" id={id}>{name}</p>
        </div>
  )
}

export default Card
