import React from 'react'
import UserChart from "./UserChart";
import CharList from "./CharList";

function SideBar({currentCharacters, setSelected, inspectCharacter, toInBetween}) {
  return (
    <div className="bg-light col-span-1 grid grid-rows-7 p-3">
                    <div className="flex justify-center items-center my-3">
                        <h2 className="row-span-1 text-orange text-2xl">Overview</h2>
                    </div>
                    

                    <div className="bg-white grid place-items-center rounded-lg shadow-md">
                        <UserChart currentCharacters={currentCharacters} />
                    </div>

                    <div className="flex justify-center items-center my-3">
                        <h2 className="row-span-1 text-orange text-2xl text-center">Your Characters</h2>
                    </div>

                    <div className="bg-white row-span-3 grid bg-light">
                        <CharList currentCharacters={currentCharacters} setSelected={setSelected} inspectCharacter={inspectCharacter} />
                    </div>

                    <div className="bg-white row-span-1 flex justify-end items-end bg-light ">
                        <button onClick={toInBetween} className="bg-red w-full p-3 text-light shadow-md rounded-lg transition-all duration-150 hover:bg-orange hover:text-white">Create New</button>
                    </div>
                </div>
  )
}

export default SideBar
