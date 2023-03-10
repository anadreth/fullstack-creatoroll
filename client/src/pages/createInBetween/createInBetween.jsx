import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  setCharName,
  setCreateCharacterPageCount,
  setRace,
  setBackground,
  setTraits,
  setEquipment,
  setCharClass,
  setDexterity,
  setIntelligence,
  setStrength,
} from "../../state";

import { UserNavBar } from "../../components/index";
import { motion } from "framer-motion";

const CreateInBetween = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);

  const handleCreateCharacter = () => {
    dispatch(
      setCharName({
        charName: "",
      })
    );
    dispatch(
      setCreateCharacterPageCount({
        pageCount: 0,
      })
    );
    dispatch(
      setRace({
        race: null,
      })
    );
    dispatch(
      setCharClass({
        charClass: null,
      })
    );
    dispatch(
      setBackground({
        background: "0",
      })
    );
    dispatch(
      setTraits({
        traits: null,
      })
    );
    dispatch(
      setEquipment({
        equipment: null,
      })
    );
    dispatch(
      setStrength({
        strength: 10,
      })
    );
    dispatch(
      setDexterity({
        dexterity: 10,
      })
    );
    dispatch(
      setIntelligence({
        intelligence: 10,
      })
    );
    navigate("/create-character");
  };

  return (
    <div className="bg-light h-screen font-poppins overflow-hidden">
      <UserNavBar />
      <div className="h-[72.5px]"></div>
      <div className="grid grid-cols-1 grid-rows-2 place-items-center w-full md:grid-cols-2 md:grid-rows-1 md:h-3/4 md:text-xl">
        <motion.div
          className="w-80 h-52 md:w-96 md:h-80 rounded-lg p-3 bg-white shadow-md grid grid-rows-3 text-center align-center mb-3"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex justify-center items-center">
            <h2 className="text-orange text-xl md:text-2xl">
              CREATE CHARACTER
            </h2>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-red">
              Create new <br />
              original character
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={handleCreateCharacter}
              className="transition-all duration-150 rounded-lg bg-red md:w-80 w-64 p-3 shadow-md text-light hover:bg-orange"
            >
              Character
            </button>
          </div>
        </motion.div>
        <motion.div
          className="rounded-lg w-80 h-52 md:w-96 md:h-80 p-3 shadow-md bg-white  grid grid-rows-3 text-center align-center mb-6 md:mb-0"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          <div className="flex justify-center items-center">
            <h2 className="text-orange text-xl md:text-2xl">
              CREATE ADVENTURE
            </h2>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-red ">
              Create full fledged <br /> DND adventure
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => navigate("/create-adventure")}
              className="rounded-lg md:w-80 transition-all duration-150 hover:bg-orange w-64 shadow-md bg-red p-3 text-light"
            >
              Create New Adenture
            </button>
          </div>
        </motion.div>
        <div className="p-3 md:col-span-2">
          <motion.button
            className="rounded-lg transition-all duration-150 hover:bg-dark-red w-80 hover:outline-dark-red hover:outline-2 bg-red shadow-md text-light hover:text-white p-3"
            onClick={() => navigate("/dashboard/" + currentUser._id)}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            To Dashboard
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CreateInBetween;
