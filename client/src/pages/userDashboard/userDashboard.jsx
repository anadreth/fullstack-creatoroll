import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import jsPDF from "jspdf";

import { Error, UserNavBar } from "../../components/index";

import SideBar from "./SideBar/SideBar";
import CharChart from "./CharChart/CharChart";
import PopUp from "./CharChart/PopUp";
import BackgroundPop from "./CharChart/BackgroundPop";

import { motion } from "framer-motion";

const UserDashboard = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const [racePop, setRacePop] = useState(false);
  const [classPop, setClassPop] = useState(false);
  const [traitPop, setTraitPop] = useState(false);
  const [eqpPop, setEqpPop] = useState(false);
  const [backPop, setBackPop] = useState(false);
  const [error, setError] = useState(null);

  const [currentCharacters, setCurrentCharacters] = useState([]);
  const [selected, setSelected] = useState("");
  const [displayed, setDisplayed] = useState([
    {
      charName: "",
      race: "",
      charClass: "",
      dexterity: "",
      strength: "",
      intelligence: "",
      traits: "",
      equipment: "",
      charId: "",
      background: "",
    },
  ]);
  const character = displayed[0];

  //PDF generating
  const reportTemplateRef = useRef(null);

  const saveDiv = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });
    doc.html(reportTemplateRef.current, {
      async callback(doc) {
        await doc.save("document");
      },
    });
  };
  //Getting list of current player characters
  const getCharacters = async () => {
    setError(null);
    try {
      const response = await fetch(
        "https://creato-roll-server.onrender.com/character/get",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            id: currentUser._id,
          }),
        }
      );

      if (!response.ok) {
        setError("Something went wrong.");
        return;
      }

      const characters = await response.json();
      setCurrentCharacters(characters);
    } catch (error) {
      setError("Something went wrong.");
    }
  };

  //deleting selected character
  const deleteCharacter = async () => {
    try {
      const response = await fetch(
        "https://creato-roll-server.onrender.com/character/delete",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            id: currentUser._id,
            charId: selected,
          }),
        }
      );

      if (!response.ok) {
        setError("Something went wrong.");
        return;
      }

      getCharacters(currentUser);
    } catch (error) {
      setError("Something went wrong.");
    }
  };

  //to not have to use refresh button
  useEffect(() => {
    getCharacters(currentUser);
  }, []);

  //getting values of specific character on selecting
  const inspectCharacter = (id) => {
    const characterChosen = currentCharacters.filter(
      (item) => item.charId === id
    );
    setDisplayed(characterChosen);
  };

  const toInBetween = () => {
    navigate("/create-in-between");
  };

  return (
    <div className="bg-light">
      <UserNavBar userName={currentUser.userName} />
      {racePop && selected ? (
        <PopUp id="race" attribute={character.race} setPop={setRacePop} />
      ) : classPop && selected ? (
        <PopUp
          id="class"
          attribute={character.charClass}
          setPop={setClassPop}
        />
      ) : traitPop && selected ? (
        <PopUp id="trait" attribute={character.traits} setPop={setTraitPop} />
      ) : eqpPop && selected ? (
        <PopUp id="eqp" attribute={character.equipment} setPop={setEqpPop} />
      ) : backPop && selected ? (
        <BackgroundPop
          id="background"
          background={character.background}
          character={character}
          setPop={setBackPop}
        />
      ) : (
        <></>
      )}

      {error && (
        <div className="absolute flex flex-col justify-center items-center text-center top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] h-44 w-64 bg-red text-light border-red border shadow-md p-3 rounded-lg">
          <Error message={error} />
          <button
            className="bg-light rounded-lg py-1 px-3 shadow-md text-red mt-3"
            onClick={() => setError(null)}
          >
            Hide
          </button>
        </div>
      )}

      <div className="font-poppins px-3 grid md:grid-cols-5 grid-cols-1 md:gap-x-3 ">
        <SideBar
          currentCharacters={currentCharacters}
          setSelected={setSelected}
          inspectCharacter={inspectCharacter}
          toInBetween={toInBetween}
        />

        <CharChart
          character={character}
          setRacePop={setRacePop}
          setClassPop={setClassPop}
          setTraitPop={setTraitPop}
          setEqpPop={setEqpPop}
          setBackPop={setBackPop}
          selected={selected}
        />

        <div className="my-3 flex flex-col justify-end gap-3">
          <motion.button
            onClick={deleteCharacter}
            className="bg-red p-3 text-light shadow-md rounded-lg transition-all duration-150 hover:bg-dark-red hover:text-white"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Delete Character
          </motion.button>
          {/* <button onClick={saveDiv} className="bg-red p-3 text-light shadow-md rounded-lg transition-all duration-150 hover:bg-dark-red hover:text-white">Get PDF</button> */}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
