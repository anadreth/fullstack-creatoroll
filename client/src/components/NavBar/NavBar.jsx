import React from "react";
import { useState,useRef } from "react";
import { Transition } from '@tailwindui/react'
import { useNavigate } from "react-router-dom";



const NavBar = () => {
    const [sidebar, setSidebar] = useState(false);
    const navigate = useNavigate();
    const buttonRef = useRef(null)
    const url = "https://creato-roll-server.onrender.com/"
    const urlHome = "http://localhost:5173/"
   
    const handleSidebar = () => {
        if(sidebar) {
            setSidebar(false);
            buttonRef.current.blur();
        } else {
            setSidebar(true);
        }
    }
    const toHome = () => {
        navigate("/");
    }
    const toAbout = () => {
        navigate("/about");
    }
    const toLogin = () => {
        navigate("/login");
    }
    const toContact = () => {
        navigate("/contact")
    }

    return (

    <nav className="font-poppins text-light bg-light p-3 fixed w-full z-20 top-0 left-0">
        <div className="flex flex-wrap items-center justify-between mx-auto">
            <button onClick={toHome} className="flex items-center md:ml-6">
                <img src={url + "images/logo-clear.png"} className="h-12 mr-3 sm:h-9" alt="Creato-Roll Logo" />
                <span className="font-seasons self-center text-xl text-orange whitespace-nowrap tracking-widest">CreatoRoll</span>
            </button>
            <div className="flex md:order-2 md:mr-6">
                <div>
                    <button className="relative group" onClick={handleSidebar} ref={buttonRef}>
                        <div className="relative flex overflow-hidden items-center justify-center outline-none rounded-full w-[47px] h-[47px] transform transition-all bg-light ring-0 ring-red hover:ring-4 group-focus:ring-2 ring-opacity-30 duration-200 focus:duration-500 shadow-md">
                        <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                            <div className="bg-red h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
                            <div className="bg-red h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
                            <div className="bg-red h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>

                            <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                            <div className="absolute bg-red h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                            <div className="absolute bg-red h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                            </div>
                        </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
                <Transition
                show={sidebar}
                className="bg-red rounded-lg flex justify-end items-start text-lg w-full h-screen p-3 mt-3"
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-[-100%]"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-[-100%]"
                >
                        <div className="w-full">
                            <ul className="" >
                                <li><button className="p-6  w-full hover:text-red hover:bg-light hover:font-bold text-end rounded-lg" onClick={toHome}>HOME</button></li>
                                <li><button className="p-6  w-full hover:text-red hover:bg-light hover:font-bold text-end rounded-lg" onClick={toContact}>CONTACT</button></li>
                                <li><button className="p-6   w-full hover:text-red hover:bg-light hover:font-bold text-end rounded-lg" onClick={toAbout}>ABOUT</button></li>
                                <li><button className="p-6   w-full hover:text-red hover:bg-light hover:font-bold text-end rounded-lg" onClick={toLogin}>JOIN</button></li>
                            </ul>
                        </div>
                </Transition>
    </nav>
   
    )
}

export default NavBar;




