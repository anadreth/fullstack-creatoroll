import React, { useState } from "react";
import { useSelector } from "react-redux";
import {Loading} from './../index'
import {motion} from 'framer-motion'

const Background = ({setGenerated, generated}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const currentName = useSelector((state) => state.charName);
    const currentRace = useSelector((state) => state.race);
    const currentClass = useSelector((state) => state.charClass);
    const currentTrait = useSelector((state) => state.traits);
    const currentStrength = useSelector((state) => state.strength);
    const currentDexterity = useSelector((state) => state.dexterity);
    const currentInt = useSelector((state) => state.intelligence);


    const getBackground = async() => {
        setLoading(true);
        setError(null);
        try {
            const responseBackground = await fetch('https://creato-roll-server.onrender.com/background/get', {
                method:'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: currentName,
                    charClass: currentClass.title,
                    race: currentRace.title,
                    trait: currentTrait.title,
                    str: currentStrength,
                    dex: currentDexterity,
                    int: currentInt,
                }),
            })

            if (!responseBackground.ok) {
                setError("Something went wrong.")
                return;
            }

            const background = await responseBackground.json();
            setLoading(false);
            setGenerated(background);
        } catch (error) {
            setError("Something went wrong.");
        }
       
    }

    const handleTextarea = (e) => {
        setGenerated(e.target.value);
    }
    const generateText = async () => {
        if(!generated) {
            getBackground();
        } else {
            setGenerated("")
        }
    }

    return(
        <div className="h-3/4 flex flex-col justify-center items-center">
            <div className="flex w-80 justify-start items-center">
                <h2 className="my-3 text-xl text-orange">Your Background</h2>
            </div>
            <motion.textarea className="focus:outline-none scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-corner-red scrollbar-track-white scrollbar-thumb-red shadow-md h-1/2 p-3 w-80 resize-none overflow-scroll rounded-lg" placeholder={"Who am I? \nLet me tell you a tale..."} value={generated} onChange={handleTextarea}
                animate={{opacity: [0,1]}}
                transition={{duration: 0.2}}
            />
            <motion.div className="bg-red p-3 m-3 shadow-md w-80 text-center rounded-lg"
                animate={{opacity: [0,1]}}
                transition={{duration: 0.2, delay: 0.1}}
            >
                <p className="text-light pb-3">{error ? error : "Out of ideas? Try generating!"}</p>
                {!generated && !loading ? <button className="transition-all duration-150 hover:shadow-lg hover:shadow-light rounded-lg w-44 overflow-hidden shadow-md text-lg bg-orange text-light p-3" onClick={generateText}>Generate</button> 
                : loading ?
                <button disabled type="button" className="w-44 p-3 mr-2 text-lg rounded-lg text-red bg-white shadow-md inline-flex justify-center items-center">
                    <Loading />
                </button>
                : <button className="w-44 rounded-lg text-lg bg-white shadow-md text-red p-3" onClick={generateText}>Clear</button>  }
            </motion.div>
        </div>
    )
}

export default Background;