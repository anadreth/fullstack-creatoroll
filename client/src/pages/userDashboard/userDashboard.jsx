import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserNavBar from "./userNavBar";
import CharChart from "./CharChart";
import jsPDF from 'jspdf'; 
import CharList from "./CharList";



const UserDashboard = () => {
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.user);
    const [currentCharacters, setCurrentCharacters] = useState([]);
    const [selected, setSelected] = useState("");
    const [displayed, setDisplayed] = useState([]);
    const character = displayed[0];
    
    console.log(displayed);
//PDF GENERATING
    const reportTemplateRef = useRef(null);
   
	const saveDiv = () => {
		const doc = new jsPDF({
			format: 'a4',
			unit: 'px',
		});
		doc.html(reportTemplateRef.current, {
			async callback(doc) {
				await doc.save('document');
			},
		});
	};

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

    const inspectCharacter = (id) => {
       const characterChosen = currentCharacters.filter(item => item.charId === id);
       setDisplayed(characterChosen);
    }
    const toInBetween = () =>{
        navigate("/create-in-between")
    }
    
    return (
        <div className="font-poppins bg-light h-screen grid grid-cols-5">
           <UserNavBar userName={currentUser.userName}/>
           <div className="bg-white"></div>
           <div className="bg-dark"></div>
           <div className="bg-red"></div>
           <div className="bg-orange"></div>
           <div className="bg-yogurt"></div>
           <div className="bg-white"></div>
           <div className="bg-dark"></div>
           <div className="bg-red"></div>
           <div className="bg-orange"></div>
        </div>
    )
}

export default UserDashboard;


{/*<CharChart id="character" character={character} />
<CharList currentCharacters={currentCharacters} toInBetween={toInBetween} setSelected={setSelected} inspectCharacter={inspectCharacter} />
<UserNavBar userName={currentUser.userName}/>*/}