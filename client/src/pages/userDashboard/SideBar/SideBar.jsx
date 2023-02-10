import React from "react";
import UserChart from "./UserChart";
import CharList from "./CharList";
import { motion } from "framer-motion";

function SideBar({
  currentCharacters,
  setSelected,
  inspectCharacter,
  toInBetween,
}) {
  return (
    <div
      className={`bg-light h-screen max-w-[24rem] w-full flex flex-col justify-start items-stretch ${
        screen.width < 767 ? "mx-auto" : ""
      }`}
    >
      <div className="mt-[73px]"></div>
      <div className="flex justify-center items-center py-3">
        <motion.h2
          className="text-orange text-2xl"
          animate={{ opacity: [0, 1] }}
        >
          Overview
        </motion.h2>
      </div>
      <div className="bg-white rounded-lg shadow-md">
        <UserChart currentCharacters={currentCharacters} />
      </div>
      <div className="flex justify-center items-center py-3">
        <h2 className="text-orange text-2xl text-center">Your Characters</h2>
      </div>
      <div className="bg-white bg-light h-full pb-3 overflow-hidden">
        <CharList
          currentCharacters={currentCharacters}
          setSelected={setSelected}
          inspectCharacter={inspectCharacter}
        />
      </div>
      <div className="py-3 mt-auto">
        <motion.button
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.5 }}
          onClick={toInBetween}
          className="bg-red w-full p-3 text-light shadow-md rounded-lg transition-all duration-150 hover:bg-orange hover:text-white"
        >
          Create New
        </motion.button>
      </div>
    </div>
  );
}

export default SideBar;
