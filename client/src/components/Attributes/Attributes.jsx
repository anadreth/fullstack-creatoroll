import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStrength, setDexterity, setIntelligence } from '../../state';

import Attribute from "./Attribute/Attribute";


const Attributes = () => {
    const dispatch = useDispatch();
    const strength = useSelector((state) => state.strength)
    const dexterity = useSelector((state) => state.dexterity)
    const intelligence = useSelector((state) => state.intelligence)

    const incrementStrength = () => {
        if (strength < 20) {
            dispatch(
                setStrength({
                        strength: strength + 1,
                })
            )
        }
        return;
    }
    const decrementStrength = () => {
        if (strength > 5) {
            dispatch(
                setStrength({
                    strength: strength - 1,
                })
            )
        }
        return;
    }
    const incrementDexterity = () => {
        if (dexterity < 20) {
            dispatch(
                setDexterity({
                    dexterity: dexterity + 1,
                })
            )
        }
        return;
    }
    const decrementDexterity = () => {
        if (dexterity > 5) {
            dispatch(
                setDexterity({
                    dexterity: dexterity - 1,
                })
            )
        }
        return;
    }
    const incrementIntelligence = () => {
        if (intelligence < 20) {
            dispatch(
                setIntelligence({
                    intelligence: intelligence + 1,
                })
            )
        }
        return;
    }
    const decrementIntelligence = () => {
        if (intelligence > 5) {
            dispatch(
                setIntelligence({
                    intelligence: intelligence - 1,
                })
            )
        }
       return;
    }
    return (
        <div className="h-3/4 flex flex-col justify-center items-center">
            <div className=" w-80 flex justify-start items-center">
                <h2 className="my-3 text-xl text-orange">Choose Your Attributes</h2>
            </div>
            <Attribute decrement={decrementStrength} increment={incrementStrength} nameAtt="Strength" count={strength} />
            <Attribute decrement={decrementDexterity} increment={incrementDexterity} nameAtt="Dexterity" count={dexterity} />
            <Attribute decrement={decrementIntelligence} increment={incrementIntelligence} nameAtt="Intelligence" count={intelligence} />
        </div>
    )
}

export default Attributes;