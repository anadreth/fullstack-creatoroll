import React from "react";

function ChartSm({
  character,
  setBackPop,
  setClassPop,
  setEqpPop,
  setRacePop,
  setTraitPop,
}) {
  return (
    <div className="bg-white p-3 rounded-lg shadow-md text-red mb-3 overflow-scroll scrollbar-rounded-lg scrollbar-thin scrollbar-corner-red scrollbar-track-white scrollbar-thumb-red scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <div className="bg-light mb-3 rounded-lg shadow-md p-3">
        <div className="flex justify-around items-center mb-3">
          <h2 className="text-orange text-2xl">{character.charName}</h2>
        </div>
        <div className="text-sm">
          <div className="flex justify-between items-center">
            <p>Health: </p>
            <p>0</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Level: </p>
            <p>0</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Money: </p>
            <p>0</p>
          </div>
        </div>
      </div>

      <div className="bg-light mb-3 rounded-lg shadow-md p-3">
        <div className="flex justify-between items-center mb-3">
          <p className="text-orange mr-3">{character.race.title}</p>
          <img
            src={character.race.iconPath}
            className="aspect-square w-[35px] h-[40px] mx-3"
          ></img>
        </div>
        <div className="flex justify-between items-center">
          <div className="oveflow-scroll">
            <p className="text-sm">{character.race.shortDescription}</p>
          </div>
          <button
            className="bg-red text-white text-sm  px-3 py-1 rounded-lg hover:bg-dark-red shadow-md transition-all duration-150"
            onClick={() => setRacePop(true)}
          >
            Read more..
          </button>
        </div>
      </div>

      <div className="bg-light mb-3 rounded-lg shadow-md p-3">
        <div className="flex justify-between items-center mb-3">
          <p className="text-orange mr-3">{character.charClass.title}</p>
          <img
            src={character.charClass.iconPath}
            className="aspect-square w-[35px] h-[40px] mx-3"
          ></img>
        </div>
        <div className="flex justify-between items-center">
          <div className="oveflow-scroll">
            <p className="text-sm">{character.charClass.shortDescription}</p>
          </div>
          <button
            className="bg-red text-white text-sm  px-3 py-1 rounded-lg hover:bg-dark-red shadow-md transition-all duration-150"
            onClick={() => setClassPop(true)}
          >
            Read more..
          </button>
        </div>
      </div>

      <div className="bg-light mb-3 rounded-lg shadow-md p-3">
        <div className="flex justify-between items-center mb-3">
          <p className="text-orange mr-3">{character.traits.title}</p>
          <img
            src={character.traits.iconPath}
            className="aspect-square w-[35px] h-[40px] mx-3"
          ></img>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <p className="text-sm">{character.traits.shortDescription}</p>
          </div>
          <button
            className="bg-red text-white text-sm  px-3 py-1 rounded-lg hover:bg-dark-red shadow-md transition-all duration-150"
            onClick={() => setTraitPop(true)}
          >
            Read more..
          </button>
        </div>
      </div>

      <div className="bg-light mb-3 rounded-lg shadow-md p-3">
        <div className="flex justify-between items-center mb-3">
          <p className="text-orange mr-3">{character.equipment.title}</p>
          <img
            src={character.equipment.iconPath}
            className="aspect-square w-[35px] h-[40px] mx-3"
          ></img>
        </div>
        <div className="flex justify-between items-center">
          <div className="oveflow-scroll">
            <p className="text-sm">{character.equipment.shortDescription}</p>
          </div>
          <button
            className="bg-red text-white text-sm  px-3 py-1 rounded-lg hover:bg-dark-red shadow-md transition-all duration-150"
            onClick={() => setEqpPop(true)}
          >
            Read more..
          </button>
        </div>
      </div>

      <div className="bg-light mb-3  rounded-lg shadow-md">
        <div className="flex justify-between items-center p-3">
          <p className="text-orange">Strength:</p>
          <p>{character.strength}</p>
        </div>
        <div className="flex justify-between items-center pb-3 px-3">
          <p className="text-orange">Dexterity:</p>
          <p>{character.dexterity}</p>
        </div>
        <div className="flex justify-between items-center pb-3 px-3">
          <p className="text-orange">Intelligence:</p>
          <p>{character.intelligence}</p>
        </div>
      </div>

      <div className="bg-light rounded-lg shadow-md p-3">
        <p className="text-orange mb-3">Background:</p>
        <p className="pb-3">{character.background.slice(0, 100) + "..."}</p>
        <div className="flex justify-end items-end">
          <button
            className="bg-red text-white text-sm  px-3 py-1 rounded-lg hover:bg-dark-red shadow-md transition-all duration-150"
            onClick={() => setBackPop(true)}
          >
            Read more..
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChartSm;
