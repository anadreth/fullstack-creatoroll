import React from 'react'
import {motion} from 'framer-motion'

function ChartLg({character, setBackPop, setClassPop, setEqpPop, setRacePop, setTraitPop}) {
  return (
    <motion.div className="grid grid-cols-3 auto-rows-auto gap-3 h-full  w-full bg-white p-3 rounded-lg shadow-md text-red mb-3 overflow-scroll scrollbar-rounded-lg scrollbar-thin scrollbar-corner-red scrollbar-track-white scrollbar-thumb-light scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
        animate={{opacity: [0, 1]}}
        transition={{duration: 0.2}}
    >       
        <motion.div className="col-span-1 row-span-2 bg-light rounded-lg shadow-md p-3"
            animate={{scale: [0, 1], opacity: [0, 1]}}
            transition={{delay: 0.2}}
        >
            <div className='flex justify-around items-center mb-3'>
                    <motion.h2 className="text-orange text-2xl"
                    animate={{opacity: [0 ,1]}}
                    >{character.charName}</motion.h2>
            </div>
            <div className='text-sm'>
                <div className='flex justify-between items-center'>
                    <p>Health: </p>
                    <p>0</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p>Level: </p>
                    <p>0</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p>Money: </p>
                    <p>0</p>
                </div> 
            </div>
            
        </motion.div>
        
        <motion.div className="flex flex-col col-span-1 row-span-1 justify-between bg-light rounded-lg shadow-md p-3"
            animate={{scale: [0, 1], opacity: [0, 1]}}
            transition={{delay: 0.3}}
        >
            <div className='flex justify-between items-center mb-3'>
                <p className='text-orange mr-3'>{character.race.title}</p>
                <img src={character.race.iconPath} className="aspect-square w-[35px] h-[40px] mx-3"></img>
            </div>
            <p className='text-sm mb-auto'>{character.race.shortDescription}</p>
            <button className="mt-3 bg-red text-white text-sm  px-3 py-1 rounded-lg hover:bg-dark-red shadow-md transition-all duration-150" onClick={() => setRacePop(true)}>Read more..</button>
        </motion.div>

        <motion.div className="flex flex-col justify-between bg-light rounded-lg shadow-md p-3"
            animate={{scale: [0, 1], opacity: [0, 1]}}
            transition={{delay: 0.4}}
        >
            <div className='flex justify-between items-center mb-3'>
                <p className='text-orange mr-3'>{character.charClass.title}</p>
                <img src={character.charClass.iconPath} className="aspect-square w-[35px] h-[40px] mx-3"></img>
            </div>
            <p className='text-sm mb-auto'>{character.charClass.shortDescription}</p>
            <button className="mt-3 bg-red text-white text-sm px-3 py-1 rounded-lg hover:bg-dark-red shadow-md transition-all duration-150" onClick={() => setClassPop(true)}>Read more..</button>
        </motion.div>

        <motion.div className="flex flex-col justify-between bg-light rounded-lg shadow-md p-3"
            animate={{scale: [0, 1], opacity: [0, 1]}}
            transition={{delay: 0.5}}
        >
            <div className='flex justify-between items-center mb-3'>
                <p className='text-orange mr-3'>{character.traits.title}</p>
                <img src={character.traits.iconPath} className="aspect-square w-[35px] h-[40px] mx-3"></img>
            </div>
             <p className='text-sm mb-auto'>{character.traits.shortDescription}</p>
            <button className=" mt-3 bg-red text-white text-sm  px-3 py-1 rounded-lg hover:bg-dark-red shadow-md transition-all duration-150" onClick={() => setTraitPop(true)}>Read more..</button>
        </motion.div>

        <motion.div className="flex flex-col justify-between bg-light rounded-lg shadow-md p-3"
            animate={{scale: [0, 1], opacity: [0, 1]}}
            transition={{delay: 0.6}}
        >
            <div className='flex justify-between items-center mb-3'>
                <p className='text-orange mr-3'>{character.equipment.title}</p>
                <img src={character.equipment.iconPath} className="aspect-square w-[35px] h-[40px] mx-3"></img>
            </div>
            <p className='text-sm mb-auto'>{character.equipment.shortDescription}</p>

            <button className="bg-red text-white text-sm mt-3 px-3 py-1 rounded-lg hover:bg-dark-red shadow-md transition-all duration-150" onClick={() => setEqpPop(true)}>Read more..</button>
        </motion.div>

        <motion.div className="bg-light row-span-2 rounded-lg shadow-md p-3 flex flex-col items-center justify-around gap-3"
            animate={{scale: [0, 1], opacity: [0, 1]}}
            transition={{delay: 0.7}}
        >
            <div className='flex flex-col gap-3 text-center'>
                <p className="text-orange">Strength:</p>
                <p className='bg-white rounded-full p-3 text-center w-24 text-xl'>{character.strength}</p>
            </div>
            <div className='flex flex-col gap-3 text-center'>
                <p className="text-orange">Dexterity:</p>
                <p className='bg-white rounded-full p-3 text-center w-24 text-xl'>{character.dexterity}</p>
            </div>
            <div className='flex flex-col gap-3 text-center'>
                <p className="text-orange">Intelligence:</p>
                <p className='bg-white rounded-full p-3 text-center w-24 text-xl'>{character.intelligence}</p>
            </div>
           

                
            
            
                
           
        </motion.div>
        
        <motion.div className="flex flex-col justify-between bg-light col-span-2 row-span-2 rounded-lg shadow-md p-3"
            animate={{scale: [0, 1], opacity: [0, 1]}}
            transition={{delay: 0.8}}
        >
            <p className="text-orange mb-3">Background:</p>
            <p className='pb-3 text-justify mb-auto'>{character.background.slice(0, 500) + "..."}</p>
            <button className="bg-red text-white text-sm  px-3 py-1 rounded-lg hover:bg-dark-red shadow-md transition-all duration-150" onClick={() => setBackPop(true)}>Read more..</button>          
        </motion.div>
 
    </motion.div>
  )
}

export default ChartLg