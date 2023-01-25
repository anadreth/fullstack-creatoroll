import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./../../components/NavBar/NavBar"
import Footer from "./../../components/Footer/Footer"

const HomePage = () => {
    const navigate = useNavigate();
    const url = "http://localhost:3000/"
    const handleStart = () => {
        navigate("/login");
    }
    return (
        <div className="w-full h-auto tracking-widest font-poppins bg-light">   
            <NavBar />
            
            <div className="grid place-items-center h-screen z-50">
                <div className="text-center">
                    <h2 className="text-5xl text-red font-seasons"><span className="text-orange">Create</span> and enjoy unique <span className="text-orange">stories</span> with just a few clicks.</h2>
                    <p className="mt-24 text-red p-3">LET ADVENTURE BEGIN</p>
                    <div className="flex justify-center items-center ">
                    <button onClick={handleStart} className="w-64 bg-red text-light shadow-md flex items-center justify-center p-3 group">
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