import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserNavBar from "./userNavBar";
import CharChart from "./CharChart";
import jsPDF from 'jspdf'; 


const UserDashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
        <div className="font-poppins bg-light w-screen h-screen flex justify-center lg:justify-start">
            <UserNavBar userName={currentUser.userName}/>
            <>
            {selected && screen.width < 1000? <></> : 
            <div id="sidebar" className="text-center w-96">
                <div className="mt-[70px]">
                    <h2 className="font-poppints text-red text-xl p-3">Your Characters</h2>
                </div>  
                <div className="font-poppins h-3/4">      
                    <div id="charDisplay" className="m-3 h-full bg-white overflow-scroll p-3 scrollbar-thin scrollbar-corner-red scrollbar-track-white scrollbar-thumb-red "> 
                        <div className="w-full h-full">
                            <ul className="w-full h-full">
                                    <li>   
                                        <button onClick={toInBetween}className='bg-red p-3 w-32 m-3 shadow-md hover:bg-orange text-light'>Create New</button>
                                    </li>
                                {currentCharacters.map(character =>
                                    <li key={character.charId}>
                                        <Card 
                                        id={character.charId}
                                        iconPath={character.race.iconPath}
                                        name={character.charName} 
                                        setSelected={setSelected}
                                        inspectCharacter={inspectCharacter}
                                        />
                                    </li>)}   
                            </ul>
                        </div> 
                    </div>                 
                </div>
            </div>
            }
            </>
            <>
            {selected && screen.width > 1000 ? 

            <div className="font-poppins mx-12 w-3/5 h-screen flex justify-center">
                <div className="text-center w-full">
                    <div className="mt-[70px]">
                        <h2 className="font-poppints text-red text-xl p-3">Character Chart</h2>
                    </div>
                    <div ref={reportTemplateRef} id="charBoard" className="shadow-md h-3/4 m-3 overflow-scroll scrollbar-thin scrollbar-corner-red scrollbar-track-white scrollbar-thumb-red  bg-white p-3">
                        <CharChart id="character" character={character} />
                    </div>
                </div>  
            </div>

            : selected && screen.width < 1000 ? 

            <div className="text-center w-96 font-poppins h-screen flex justify-center">
                <div className="w-full">
                    <div className="mt-[70px]">
                        <h2 className="font-poppints text-red text-xl p-3">Character Chart</h2>
                    </div>
                    <div ref={reportTemplateRef} id="charBoard" className="shadow-md overflow-scroll h-3/4 m-3 bg-white p-3 scrollbar-thin scrollbar-corner-red scrollbar-track-white scrollbar-thumb-red ">
                        <CharChart id="character" character={character} />
                    </div>
                </div>  
            </div>

            : <></>} 
            </>  

            {selected && screen.width > 1000 ? 
                <div className="h-full w-96 flex justify-center items-center text-center">
                    <ul>
                        <li className="p-3">
                            <button onClick={saveDiv} className='bg-red shadow-md text-light p-3 mx-3'>Get PDF</button>
                        </li>
                    </ul>
                </div> 
        : <></>}
             
        </div>
    )
}

export default UserDashboard;
