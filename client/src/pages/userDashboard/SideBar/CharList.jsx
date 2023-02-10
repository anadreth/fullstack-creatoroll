import React from "react";
import { Card } from "./../../../components/index";
import { motion } from "framer-motion";

function CharList({ currentCharacters, setSelected, inspectCharacter }) {
  return (
    <div
      id="sidebar"
      className="bg-white h-full rounded-lg shadow-md overflow-scroll scrollbar-rounded-lg scrollbar-thin scrollbar-corner-red scrollbar-track-white scrollbar-thumb-red scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
    >
      <ul className="">
        {currentCharacters.map((character, index) => (
          <motion.li
            key={character.charId}
            animate={{ y: [-100, 0], opacity: [0, 1] }}
            transition={{ delay: index / 10 }}
          >
            <Card
              id={character.charId}
              iconPath={character.race.iconPath}
              name={character.charName}
              setSelected={setSelected}
              inspectCharacter={inspectCharacter}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default CharList;
