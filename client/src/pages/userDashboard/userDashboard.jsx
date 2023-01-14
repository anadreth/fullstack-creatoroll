import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserNavBar from "./userNavBar";


const UserDashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user);
    const [currentCharacters, setCurrentCharacters] = useState([]);
    const [displayed, setDisplayed] = useState(currentCharacters[0]);

    const getCharacters = async () => {
        const response = await fetch("http://localhost:3000/character/get", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: currentUser._id,
            }),
        })
        const characters = await response.json();
        setCurrentCharacters(characters);
    }

    useEffect(() => {
        getCharacters(currentUser);
    }, [])

    const inspectCharacter = (e) => {
       const characterChosen = currentCharacters.filter(item => item.charId === e.target.id);
       setDisplayed(characterChosen);
    }
    return (
        <div className="font-poppins bg-light">
            <UserNavBar userName={currentUser.userName}/>
            <div className="font-poppins w-screen h-screen flex justify-center items-center"> 
                <div id="charDisplay" className="w-96 h-3/4 bg-white m-3 overflow-hidden p-3">
                    <ul>
                        {currentCharacters.map(character =>
                            <li key={character.charId}>
                                <Card clicked={inspectCharacter} displayed={displayed} id={character.charId} iconPath={character.race.iconPath} name={character.charName} />
                            </li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard;

/*{currentCharacters.map(character =>
    <li key={character.charId}>
        <img src={character.race.iconPath} alt={character.race.name} className="aspect-square w-[40px] h-[50px]"/>
        <p id={character.charId} onClick={inspectCharacter}>{character.race.name}</p>
    </li>)}*/