import React from "react";
import { setBackground } from "../../state";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Background = () => {
    const dispatch = useDispatch();
    const [generated, setGenerated] = useState();
    const [saved, setSaved] = useState(false);
    const [loading, setLoading] = useState(false);
    const currentName = useSelector((state) => state.charName);
    const currentRace = useSelector((state) => state.race);
    const currentClass = useSelector((state) => state.charClass);
    const currentTrait = useSelector((state) => state.traits);
    const currentStrength = useSelector((state) => state.strength);
    const currentDexterity = useSelector((state) => state.dexterity);
    const currentInt = useSelector((state) => state.intelligence);

    const getBackground = async() => {
        setLoading(true);
        const responseBackground = await fetch('http://localhost:3000/background/get', {
            method:'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: currentName,
                charClass: currentClass,
                race: currentRace,
                trait: currentTrait,
                str: currentStrength,
                dex: currentDexterity,
                int: currentInt,
            }),
        })
        const background = await responseBackground.json();
        setLoading(false);
        setGenerated(background);
    }

    const handleTextarea = (e) => {
        setSaved(false);
        setGenerated(e.target.value);
    }
    const generateText = async () => {
        setSaved(false);
        if(!generated) {
            getBackground();
        } else {
            setGenerated("")
        }
    }
    const saveBackground = () => {
        dispatch(
            setBackground({
                background: generated,
            })
        )
        setSaved(true);
    }

    return(
        <div className="h-3/4 flex flex-col justify-center items-center">
            <div className="flex w-80 justify-start items-center">
                <h2 className="my-3 text-xl text-orange">Your Background</h2>
            </div>
            <textarea className="shadow-md h-1/2 p-3 w-80 resize-none overflow-scroll" placeholder={"Who am I? \nLet me tell you a tale..."} value={generated} onChange={handleTextarea}/>
            <div className="bg-red p-3 m-3 shadow-md w-80 text-center">
                <p className="text-light pb-3">Out of ideas? Try generating!</p>
                {!generated && !loading ? <button className="w-44 overflow-hidden shadow-md text-lg bg-orange text-light p-3" onClick={generateText}>Generate</button> 
                : loading ?
                <button disabled type="button" className="w-44 p-3 mr-2 text-lg text-red bg-white shadow-md inline-flex justify-center items-center">
                    <svg aria-hidden="true" role="status" className="inline w-7 h-7 mr-3 text-red animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#F69500"/>
                    </svg>
                    Loading...
                </button>
                : <button className="w-44 text-lg bg-white shadow-md text-red p-3" onClick={generateText}>Clear</button>  }
            </div>
            {!saved ? <button onClick={saveBackground}>Save Background</button> :
             <p>Saved!</p>}
            
        </div>
    )
}

export default Background;