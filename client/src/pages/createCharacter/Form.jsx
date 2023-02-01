import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';

const Form = () => {
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.user);
    const unique_id = uuid();
    const [error, setError] = useState(false);

    //for FORM SUBMISSION
    const { charName, race, charClass, strength, dexterity, intelligence, background, traits, equipment } = useSelector(state => ({
        charName: state.charName,
        race: state.race,
        charClass: state.charClass,
        strength: state.strength,
        dexterity: state.dexterity,
        intelligence: state.intelligence,
        background: state.background,
        traits: state.traits,
        equipment: state.equipment,
    }));
     
    const saveCharacter = async () => {
        const savedResponse = await fetch("https://creato-roll-server.onrender.com/character/save", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: currentUser._id,
                charId: unique_id,
                charName: charName,
                race: race,
                charClass: charClass,
                strength: strength,
                dexterity: dexterity,
                intelligence: intelligence,
                background: background,
                traits: traits,
                equipment: equipment,
            }),
        });
        const saved = await savedResponse.json();
        console.log(saved);
        if(saved) {
            navigate("/dashboard/" + currentUser._id);
        }
    }

    const handleFormSubmit = async(currentUser) => { 
        await saveCharacter(currentUser);
    };


    return(
        <div>
            <button  className="rounded-lg bg-orange active:animate-ping transition-all hover:shadow-lg hover:shadow-white duration-150 shadow-md w-44 text-light border-orange border-2 p-2" onClick={handleFormSubmit}>Save Character</button>
        </div>
    )
}

export default Form;