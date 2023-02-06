import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { motion }  from 'framer-motion';

import { NavBar, Footer } from './../../components/index'

const HomePage = () => {
    const [selectedId, setSelectedId] = useState(null)
    const navigate = useNavigate();
    const url = "https://creato-roll-server.onrender.com/"
    const handleStart = () => {
        navigate("/login");
    }
    return (
        <div className="w-full h-auto tracking-widest font-poppins bg-light">   
            <NavBar contact={false} />
            
            <motion.div className="grid place-items-center h-screen z-50"  >
                <div className="h-screen w-full flex flex-col justify-center items-center lg:text-center md:text-center text-left">
                    <div className="mt-[73.1px]"></div>
                    <motion.h2 className="text-5xl text-red font-seasons p-3 w-80 lg:w-full md:w-full" 
                        animate={{ opacity: [0, 1] }}
                        transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
                    >
                        <span className="text-orange">Create</span> and enjoy unique <span className="text-orange">stories</span> with just a few clicks.
                    </motion.h2>
                    <div className="p-3 lg:w-2/4 md:w-3/4 flex justify-center items-center">
                        <motion.img src={url + "images/brand.png"} 
                            animate={{ opacity: [0, 1] }}
                            transition={{ ease: "easeOut", duration: 0.5, delay: 0.4 }}
                        />
                    </div>
                    <motion.p className="text-red p-3"
                        animate={{  opacity: [0, 1]}}
                        transition={{ ease: "easeOut", duration: 0.5, delay: 0.6 }} 
                    >LET ADVENTURE BEGIN</motion.p>
                    <motion.div className="flex justify-center items-center "
                        animate={{  opacity: [0, 1]}}
                        transition={{ ease: "easeOut", duration: 0.5, delay: 0.6 }} 
                    >
                        <button onClick={handleStart} className="w-80 rounded-lg bg-red text-light shadow-md flex items-center justify-center transition-all duration-300 p-3 group hover:bg-dark-red">
                            <div className="inline-flex overflow-hidden ">
                                <svg className="absolute left-2/4 -translate-x-2/4 w-6 h-6 -translate-y-10 transform transition-all duration-300 origin-left group-hover:translate-y-0 delay-100 group-focus:translate-y-0 delay-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                <span className="transform transition-all duration-300 origin-left group-hover:translate-y-10 delay-100 group-focus:translate-y-10 delay-100">START</span>
                            </div>
                        </button>
                    </motion.div>
                </div>
            </motion.div>

            <Footer />
        </div>
    )
}

export default HomePage;