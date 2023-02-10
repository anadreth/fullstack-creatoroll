import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Form from "./Form";
import { motion } from "framer-motion";
import {
  UserNavBar,
  Attributes,
  Background,
  ArrowLeft,
  ArrowRight,
  PageNav,
  PageList,
  Error,
} from "../../components/index";

import {
  setTraits,
  setCharClass,
  setEquipment,
  setBackground,
  setCharName,
  setRace,
  setCreateCharacterPageCount,
} from "../../state";

import {
  raceIcons,
  classIcons,
  traitIcons,
  eqpIcons,
} from "./../../assets/index";

const CreateCharacter = () => {
  const pageCount = useSelector((state) => state.pageCount);
  const currentName = useSelector((state) => state.charName);
  const currentRace = useSelector((state) => state.race);
  const currentClass = useSelector((state) => state.charClass);
  const currentTrait = useSelector((state) => state.traits);

  const [error, setError] = useState(false);
  const [generated, setGenerated] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateRace = async (e) => {
    const value = JSON.parse(e.target.value);

    dispatch(
      setRace({
        race: value,
      })
    );
  };
  const updateClass = (e) => {
    const value = JSON.parse(e.target.value);

    dispatch(
      setCharClass({
        charClass: value,
      })
    );
  };
  const updateTraits = (e) => {
    const value = JSON.parse(e.target.value);

    dispatch(
      setTraits({
        traits: value,
      })
    );
  };
  const updateEqp = (e) => {
    const value = JSON.parse(e.target.value);

    dispatch(
      setEquipment({
        equipment: value,
      })
    );
  };
  const increment = () => {
    switch (pageCount) {
      case 0:
        if (!currentName) {
          setError(true);
          return;
        } else {
          setError(false);
          break;
        }
      case 1:
        if (!currentRace) {
          setError(true);
          return;
        } else {
          setError(false);
          break;
        }
      case 2:
        if (!currentClass) {
          setError(true);
          return;
        } else {
          setError(false);
          break;
        }
      case 4:
        if (!currentTrait) {
          setError(true);
          return;
        } else {
          setError(false);
          break;
        }
      case 5:
        dispatch(
          setBackground({
            background: generated,
          })
        );
        break;
    }

    if (pageCount < 6) {
      dispatch(
        setCreateCharacterPageCount({
          pageCount: pageCount + 1,
        })
      );
    }
  };
  const decrement = () => {
    if (pageCount > 0) {
      dispatch(
        setCreateCharacterPageCount({
          pageCount: pageCount - 1,
        })
      );
    }
  };
  const toInBetween = () => {
    navigate("/create-in-between");
  };
  const handleName = (e) => {
    dispatch(
      setCharName({
        charName: e.target.value,
      })
    );
  };

  return (
    <div className="bg-light h-screen overflow-hidden w-full font-poppins">
      <UserNavBar />
      <div className="h-[72.5px]"></div>
      {pageCount === 0 ? (
        <div className="h-full bg-light">
          <div className="h-2/4 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <motion.h2
                className="text-xl p-3 text-orange"
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.2 }}
              >
                Name your character
              </motion.h2>
              <motion.input
                className="w-80 p-3 shadow-md rounded-lg focus:outline-none"
                type="text"
                onChange={handleName}
                placeholder={currentName ? currentName : "Name"}
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.2, delay: 0.2 }}
              />
            </div>
          </div>

          <div className="h-1/4 flex  flex-col justify-center items-center text-red">
            {error && (
              <Error
                className="text-red"
                message={"Your character must have a name."}
              />
            )}
            <motion.button
              className="inline-block transition-all duration-150 rounded-lg hover:bg-orange w-44 bg-red text-light shadow-md p-3 m-3"
              onClick={increment}
              animate={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ArrowRight />
            </motion.button>
            <motion.button
              className="inline-block transition-all duration-150 hover:bg-dark-red hover:border-dark-red hover:text-white rounded-lg w-44 bg-white border-orange shadow-md text-orange border-2 p-3 m-3"
              onClick={toInBetween}
              animate={{ x: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
            >
              Create Other
            </motion.button>
          </div>
        </div>
      ) : pageCount === 1 ? (
        <div className="h-full text-center">
          <PageList
            title="Choose Your Race"
            type="race"
            getUrl="/race/getall"
            saveUrl="/race/save"
            updateValue={updateRace}
            iconList={raceIcons}
            error={error}
          />
          <PageNav increment={increment} decrement={decrement} />
        </div>
      ) : pageCount === 2 ? (
        <div className="h-full text-center">
          <PageList
            title="Wizard or Ranger?"
            type="charClass"
            getUrl="/class/getall"
            saveUrl="/class/save"
            updateValue={updateClass}
            iconList={classIcons}
            error={error}
          />
          <PageNav increment={increment} decrement={decrement} />
        </div>
      ) : pageCount === 3 ? (
        <div className="h-full">
          <Attributes />
          <PageNav increment={increment} decrement={decrement} />
        </div>
      ) : pageCount === 5 ? (
        <div className="h-full">
          <Background setGenerated={setGenerated} generated={generated} />
          <PageNav increment={increment} decrement={decrement} />
        </div>
      ) : pageCount === 4 ? (
        <div className="h-full text-center">
          <PageList
            title="What's your thing?"
            type="traits"
            getUrl="/traits/getall"
            saveUrl="/traits/save"
            updateValue={updateTraits}
            iconList={traitIcons}
            error={error}
          />
          <PageNav increment={increment} decrement={decrement} />
        </div>
      ) : (
        <div className="h-full">
          <PageList
            title="Sword or that... twig?"
            type="equipment"
            getUrl="/eqp/getall"
            saveUrl="/eqp/save"
            updateValue={updateEqp}
            iconList={eqpIcons}
            error={error}
          />
          <div className="flex justify-center items-center">
            <div className="flex justify-between items-center w-80">
              <button
                className="transition-all duration-150 hover:bg-orange hover:text-white shadow-md rounded-lg bg-white w-24 text-orange active:animate-ping border-orange border-2 p-2"
                onClick={decrement}
              >
                <ArrowLeft />
              </button>
              <Form setError={setError} error={error} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateCharacter;
