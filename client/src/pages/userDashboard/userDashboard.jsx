import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import jsPDF from 'jspdf'; 
import SideBar from "./SideBar";
import UserNavBar from "./userNavBar";




const UserDashboard = () => {
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.user);
    const [currentCharacters, setCurrentCharacters] = useState([]);
    const [selected, setSelected] = useState("");
    const [displayed, setDisplayed] = useState([{
        charName: "",
        race: "",
        charClass: "",
        dexterity: "",
        strength: "",
        intelligence: "",
        traits: "",
        equipment: "",
        charId: "",
        background: "",

    }]);
    const character = displayed[0];
    console.log()

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
                <SideBar currentCharacters={currentCharacters} setSelected={setSelected} inspectCharacter={inspectCharacter} toInBetween={toInBetween} />
                    
                <div className="bg-light col-span-3 grid grid-rows-7 p-3">
                    <div className="row-span-1 flex justify-center items-center">
                        <h2 className="text-orange text-2xl">Character Chart</h2>
                    </div>
                    <div className="bg-white row-span-6 grid grid-cols-3 grid-rows-5 rounded-lg shadow-md">
                        <div className="col-span-1 row-span-2 bg-light m-3 rounded-lg">
                            <h2>{character.charName}</h2>
                        </div>
                        
                        <div className="text-orange text-xl p-3 bg-light m-3 rounded-lg"></div>
                        <div className="text-orange text-xl p-3 bg-light m-3 rounded-lg"></div>
                        <div className="text-orange text-xl p-3 bg-light m-3 rounded-lg"></div>
                        <div className="text-orange text-xl p-3 bg-light m-3 rounded-lg"></div>

                        <div className="col-span-1 row-span-3 p-3 bg-light m-3 rounded-lg"></div>
                        
                        <div className="col-span-2 row-span-3 p-3 bg-light m-3 rounded-lg">
                            
                        </div>
                    </div>
                </div>

                <div className="col-span-1 p-3 bg-light grid place-items-end">
                        <button onClick={saveDiv} className="bg-red w-full p-3 text-light shadow-md rounded-lg transition-all duration-150 hover:bg-dark-red hover:text-white">Get PDF</button>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard;


{/*<CharChart id="character" character={character} />

*/}