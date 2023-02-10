import React from "react";
import { useNavigate } from "react-router-dom";

import { UserNavBar } from "./../../components/index";
import { motion } from "framer-motion";

const CreateAdventure = () => {
  const navigate = useNavigate();
  const toInBetween = () => {
    navigate("/create-in-between");
  };
  return (
    <div className="bg-light font-poppins">
      <UserNavBar />
      <div className="h-screen w-full flex flex-col justify-center items-center text-center ">
        <motion.h2
          className="p-3 text-5xl font-seasons text-orange"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.2, delay: 0 }}
        >
          Uff... It seems this feature is still in development.
        </motion.h2>
        <motion.p
          className="text-red font-poppins "
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          You can look forward to being able to create unique adventures,
          stories, maps, characters,
          <br /> share it with other users, getting inspired back and much more
          <br /> with just a few clicks.
        </motion.p>
        <motion.button
          className="inline-block transition-all duration-150 w-80 rounded-lg hover:border-red hover:bg-red hover:text-light  bg-white border-orange shadow-md text-orange border-2 p-3 mt-12"
          onClick={toInBetween}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          Create Other
        </motion.button>
      </div>
    </div>
  );
};

export default CreateAdventure;
