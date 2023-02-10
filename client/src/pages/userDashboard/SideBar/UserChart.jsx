import React from "react";
import { motion } from "framer-motion";

function UserChart({ currentCharacters }) {
  return (
    <motion.div
      className="text-red flex flex-col justify-center items-center p-3"
      animate={{ scale: [0, 1] }}
    >
      <div className="flex justify-around items-center mb-3 w-full">
        <p className="">Characters:</p>
        <p className="">{currentCharacters.length}</p>
      </div>
      <div className="flex justify-around items-center w-full">
        <p className="">Adventures:</p>
        <p className="">0</p>
      </div>
    </motion.div>
  );
}

export default UserChart;
