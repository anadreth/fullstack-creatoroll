import React from "react";
import { useState,useRef } from "react";
import { Transition } from '@tailwindui/react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../state";


const UserNavBar = ({userName,}) => {
    const [sidebar, setSidebar] = useState(false);
    const currentUser = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const buttonRef = useRef(null)
    const url = "http://localhost:3000/"
   
    const handleSidebar = () => {
        if(sidebar) {
            setSidebar(false);
            buttonRef.current.blur();
        } else {
            setSidebar(true);
        }
    }

    const toDashboard = () => {
        navigate("/dashboard/" + currentUser._id);
    }
    const toCreateNew = () => {
        navigate("/create-in-between")
    }
    const handleClickLogOut = async () => {
        dispatch(
            setLogout()
          );
          navigate("/login");
    }

    return (

    <nav className="font-poppins text-light bg-light p-3 fixed w-full z-20 top-0 left-0">
        <div className="flex flex-wrap items-center justify-between mx-auto">
            <button onClick={toDashboard} className="flex items-center">
                <img src={url + "images/logo.png"} className="h-12 mr-3 sm:h-9" alt="Creato-Roll Logo" />
                <span className="font-seasons self-center text-xl text-orange whitespace-nowrap tracking-widest">{userName}</span>
            </button>
            <div className="flex md:order-2">
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
            className="bg-red flex justify-end items-start text-lg w-full h-screen p-3 mt-3"
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-[-100%]"
            >
                    <div className="w-full">
                        <ul >
                            <li><button className="p-6 w-full hover:text-red hover:bg-light hover:font-bold text-end" onClick={toDashboard}>Dashboard</button></li>
                            <li><button className="p-6 w-full hover:text-red hover:bg-light hover:font-bold text-end" onClick={toCreateNew}>Create New</button></li>
                            <li><button className="p-6 w-full hover:text-red hover:bg-light hover:font-bold text-end" onClick={handleClickLogOut}>Logout</button></li>
                        </ul>
                    </div>
            </Transition>
    </nav>
   
    )
}

export default UserNavBar;
