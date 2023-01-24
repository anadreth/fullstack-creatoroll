import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStrength, setDexterity, setIntelligence } from '../../state';

const Attributes = () => {
    const dispatch = useDispatch();
    const strength = useSelector((state) => state.strength)
    const dexterity = useSelector((state) => state.dexterity)
    const intelligence = useSelector((state) => state.intelligence)
    
    useEffect(() => {
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
    }, [])

    const incrementStrength = () => {
        dispatch(
            setStrength({
                    strength: strength + 1,
            })
        )
    }
    const decrementStrength = () => {
        dispatch(
            setStrength({
                strength: strength - 1,
            })
        )
    }
    const incrementDexterity = () => {
        dispatch(
            setDexterity({
                dexterity: dexterity + 1,
            })
        )
    }
    const decrementDexterity = () => {
        dispatch(
            setDexterity({
                dexterity: dexterity - 1,
            })
        )
    }
    const incrementIntelligence = () => {
        dispatch(
            setIntelligence({
                intelligence: intelligence + 1,
            })
        )
    }
    const decrementIntelligence = () => {
        dispatch(
            setIntelligence({
                intelligence: intelligence - 1,
            })
        )
    }
    return (
        <div className="h-3/4 flex flex-col justify-center items-center">
            <div className=" w-80 flex justify-start items-center">
                <h2 className="my-3 text-xl text-orange">Choose Your Attributes</h2>
            </div>
            <div className="flex justify-between items-center p-3 w-80 bg-white ">
                <button className="px-3 py-1 bg-red text-light active:bg-orange" onClick={decrementStrength}>-</button>
                <div className="flex justify-center items-center flex-col">
                    <p className="text-red text-xl mb-3">Strength:</p>
                    <p className="rounded-full  w-18 px-5 py-4 text-2xl text-orange bg-light">{strength}</p>
                </div>            
                <button className="px-3 py-1 bg-red text-light active:bg-orange" onClick={incrementStrength}>+</button>
            </div>
            <div className=" m-3 flex  justify-between items-center p-3 w-80 bg-white ">
                <button className="px-3 py-1 bg-red text-light active:bg-orange" onClick={decrementDexterity}>-</button>
                <div className="flex justify-center items-center flex-col">
                    <p className="text-red text-xl mb-3">Dexterity:</p>
                    <p className="rounded-full  w-18 px-5 py-4 text-2xl text-orange bg-light">{dexterity}</p>
                </div> 
                <button className="px-3 py-1 bg-red text-light active:bg-orange" onClick={incrementDexterity}>+</button>
            </div >
            <div className=" flex  justify-between items-center p-3 w-80 bg-white ">
                <button className="px-3 py-1 bg-red text-light active:bg-orange" onClick={decrementIntelligence}>-</button>
                <div className="flex justify-center items-center flex-col">
                    <p className="text-red text-xl mb-3">Intelligence:</p>
                    <p className="rounded-full px-5 py-4 text-2xl text-orange bg-light">{intelligence}</p> 
                </div>
                <button className="px-3 py-1 bg-red text-light active:bg-orange" onClick={incrementIntelligence}>+</button>
            </div>
        </div>
    )
}

export default Attributes;