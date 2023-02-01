import React from 'react'
import { useState} from 'react';

function PopUp({attribute, setPop}) {
    const [bgColor, setBgColor] = useState("light");
    const [textColor, setTextColor] = useState("red");
    const [scrollTop, setScrollTop] = useState(0);

    const handleScroll = (e) => {
        setScrollTop(e.currentTarget.scrollTop);
        if (scrollTop > 45) {
            setBgColor("red");
            setTextColor("light");
        } else {
            setBgColor("light");
            setTextColor("red");
        }
        
    }
    
  return (
    <div className={`fixed text-justify h-screen w-full flex flex-col justify-center items-center bg-red`} >
            <div onScroll={handleScroll}  className="rounded-lg h-3/4 min-w-80 md:w-3/4 sm:w-3/4 border-red border-2 bg-light text-red p-3 mx-3 overflow-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-corner-red scrollbar-track-white scrollbar-thumb-light" >
                <div className="flex justify-between p-3 items-center bg-white rounded-lg">
                    <div className="w-10 h-10 m-3"></div>
                    <h2 className='text-2xl text-orange m-3'>{attribute.title ? attribute.title : "Title"}</h2>
                    <img src={attribute.iconPath} className="aspect-square w-[35px] h-[40px] m-3" alt="Icon"/>
                    <button  className={"fixed p-1 transition-all duration-150  hover:bg-orange hover:text-white rounded-lg " + `bg-${bgColor} text-${textColor}`} onClick={() => setPop(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="w-full p-3">
                    <p className="italic p-3 text-orange ">{attribute.shortDescription ? attribute.shortDescription : "One liner"}</p>
                    <div className='flex justify-between items-center'>
                    <p className="p-3">{attribute.description ? attribute.description : "Description"}</p>
                </div>
                    
            </div>
                
        </div>
    </div>
  )
}

export default PopUp
