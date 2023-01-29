import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import jsPDF from 'jspdf'; 
import UserChart from "./UserChart";
import CharList from "./CharList";
import UserNavBar from "./userNavBar";




const UserDashboard = () => {
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.user);
    const [currentCharacters, setCurrentCharacters] = useState([]);
    const [selected, setSelected] = useState("");
    const [displayed, setDisplayed] = useState([]);
    const character = displayed[0];
    
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
        <div className="bg-light h-screen">
            <UserNavBar userName={currentUser.userName}/>
            <div className="h-[73px]"></div>
            <div className="font-poppins h-5/6 bg-light grid grid-cols-5 gap-3 mx-6 my-3">
                <div className="bg-light col-span-1 grid grid-rows-7 p-3">
                    <div className="flex justify-center items-center my3">
                        <h2 className="row-span-1 text-orange text-2xl">Overview</h2>
                    </div>
                    

                    <div className="bg-white row-span-1 grid place-items-center rounded-lg shadow-md">
                        <UserChart currentCharacters={currentCharacters} />
                    </div>

                    <div className="flex justify-center items-center my-3">
                        <h2 className="row-span-1 text-orange text-2xl ">Your Characters</h2>
                    </div>

                    <div className="bg-white row-span-3 grid bg-light">
                        <CharList currentCharacters={currentCharacters} setSelected={setSelected} inspectCharacter={inspectCharacter} />
                    </div>

                    <div className="bg-white row-span-1 flex justify-end items-end bg-light ">
                        <button onClick={toInBetween} className="bg-red w-full p-3 text-light shadow-md rounded-lg transition-all duration-150 hover:bg-orange hover:text-white">Create New</button>
                    </div>
                </div>
                    
                <div className="bg-light col-span-3 p-3">

                </div>

                <div className="bg-light col-span-1 p-3">

                </div>
            </div>
        </div>
    )
}

export default UserDashboard;


{/*<CharChart id="character" character={character} />

*/}