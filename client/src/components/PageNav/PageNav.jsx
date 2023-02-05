import React from "react";

import { ArrowLeft, ArrowRight } from "./../index"

const PageNav = ({decrement, increment}) => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex justify-between items-center w-80">
                    <button className="bg-white rounded-lg hover:bg-orange hover:text-white transition-all duration-150 shadow-md w-24 text-orange border-orange border-2 p-2" onClick={decrement}>
                        <ArrowLeft />
                    </button>
                    <button className="bg-white rounded-lg hover:bg-orange hover:text-white transition-all duration-150 shadow-md w-24 text-orange border-orange border-2 p-2" onClick={increment}>
                        <ArrowRight />
                    </button> 
            </div>
        </div>
    )
}

export default PageNav;