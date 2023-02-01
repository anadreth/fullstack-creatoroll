import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./../../components/NavBar/NavBar"
import Footer from "./../../components/Footer/Footer"

const HomePage = () => {
    const navigate = useNavigate();
    const url = "https://creato-roll-server.onrender.com/"
    const handleStart = () => {
        navigate("/login");
    }
    return (
        <div className="w-full h-auto tracking-widest font-poppins bg-light">   
            <NavBar />
            
            <div className="grid place-items-center h-screen z-50">
                <div className="h-screen w-full flex flex-col justify-center items-center lg:text-center md:text-center text-left">
                    <div className="mt-[73.1px]"></div>
                    <h2 className="text-5xl text-red font-seasons p-3 w-80 lg:w-full md:w-full"><span className="text-orange">Create</span> and enjoy unique <span className="text-orange">stories</span> with just a few clicks.</h2>
                    <div className="p-3 lg:w-2/4 md:w-3/4 flex justify-center items-center">
                        <img src={url + "images/brand.png"} />
                    </div>
                    <p className="text-red p-3">LET ADVENTURE BEGIN</p>
                    <div className="flex justify-center items-center ">
                        <button onClick={handleStart} className="w-80 rounded-lg bg-red text-light shadow-md flex items-center justify-center transition-all duration-300 p-3 group hover:bg-dark-red">
                            <div className="inline-flex overflow-hidden ">
                                <svg className="absolute left-2/4 -translate-x-2/4 w-6 h-6 -translate-y-10 transform transition-all duration-300 origin-left group-hover:translate-y-0 delay-100 group-focus:translate-y-0 delay-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                <span className="transform transition-all duration-300 origin-left group-hover:translate-y-10 delay-100 group-focus:translate-y-10 delay-100">START</span>
                            </div>
                        </button>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;