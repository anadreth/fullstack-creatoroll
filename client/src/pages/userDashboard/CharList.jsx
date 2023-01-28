import React from 'react'
import Card from "../../components/Card/Card";
import UserChart from "./UserChart";

function CharList({currentCharacters, toInBetween, setSelected, inspectCharacter}) {
  return (

        <div id="sidebar" className="flex justify-start items-center flex-col w-96 h-4/5">   
                    {screen.width > 1000 ? <UserChart currentCharacters={currentCharacters} /> : <></>} 
                    <h2 className="font-poppints text-red text-xl p-3">Your Characters</h2>
                    <div className="font-poppins h-2/4">      
                        <div id="charDisplay" className="w-80 h-full bg-white overflow-scroll p-3 scrollbar-thin scrollbar-corner-red scrollbar-track-white scrollbar-thumb-red "> 
                            <div className="w-full h-full">
                                <ul className="w-full h-full">
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
                <button onClick={toInBetween}className='bg-red p-3 w-80 shadow-md hover:bg-orange text-light'>Create New</button>
        </div>
           
    
  )
}

export default CharList
