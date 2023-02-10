import React from "react";
import ChartLg from "./Chart/ChartLg";
import ChartSm from "./Chart/ChartSm";
import { motion } from "framer-motion";

function CharChart({
  character,
  setRacePop,
  setClassPop,
  setEqpPop,
  setTraitPop,
  setBackPop,
  selected,
}) {
  return (
    <motion.div
      className={`flex flex-col justify-center place-self-center max-w-[60rem] col-span-3 w-full bg-light ${
        selected ? "h-screen" : ""
      }`}
      animate={{ scale: [0, 1] }}
      transition={{ delay: 0.7 }}
    >
      {screen.width > 767 ? <div className="mt-[73px]"></div> : <></>}

      {selected ? (
        <>
          <div className="flex p-3 justify-center items-center">
            <h2 className="text-orange text-2xl">Character Chart</h2>
          </div>

          {screen.width > 767 ? (
            <ChartLg
              character={character}
              setBackPop={setBackPop}
              setRacePop={setRacePop}
              setClassPop={setClassPop}
              setEqpPop={setEqpPop}
              setTraitPop={setTraitPop}
            />
          ) : (
            <ChartSm
              character={character}
              setBackPop={setBackPop}
              setRacePop={setRacePop}
              setClassPop={setClassPop}
              setEqpPop={setEqpPop}
              setTraitPop={setTraitPop}
            />
          )}
        </>
      ) : (
        <>
          <div className="flex justify-center items-center rounded-lg w-full text-xl text-red oveflow-hidden h-full m-auto">
            <h2 className="text-center p-3 w-full">
              Select Character
              <br />
              to Display
            </h2>
          </div>
        </>
      )}
    </motion.div>
  );
}

export default CharChart;
