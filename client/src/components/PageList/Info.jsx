import React from 'react'

function Info({selected, setInfo, all}) {
    let current = all.filter(item => item._id === selected);
    current = current[0];

    return (
        <div className="absolute h-screen w-3/4 flex flex-col justify-center items-center">
            <div className="rounded-lg h-3/4 w-3/4 border-red border-2 bg-light text-red p-3">
                <div className="w-full flex justify-between p-3 items-center bg-white rounded-lg">
                    <img src={current.iconPath} className="aspect-square w-[35px] h-[40px] m-3" />
                    <h2 className='text-2xl text-orange'>{current.title}</h2>
                    <button className="bg-light text-red p-1 transition-all duration-150  hover:bg-orange hover:text-white rounded-lg" onClick={() => setInfo(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="w-full p-3">
                    <p className="italic p-3 text-orange ">{current.shortDescription}</p>
                    <div className='flex justify-between items-center'>
                        <p className="p-3">{current.description}</p>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Info
