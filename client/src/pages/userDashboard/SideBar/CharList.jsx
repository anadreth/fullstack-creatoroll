import React from 'react'
import { Card } from './../../../components/index'

function CharList({currentCharacters, setSelected, inspectCharacter}) {
  return (

        <div id="sidebar" className="bg-white h-full rounded-lg shadow-md overflow-scroll scrollbar-rounded-lg scrollbar-thin scrollbar-corner-red scrollbar-track-white scrollbar-thumb-red scrollbar-thumb-rounded-full scrollbar-track-rounded-full">        
                                <ul className="">
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
           
    
  )
}

export default CharList
