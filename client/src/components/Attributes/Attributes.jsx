import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStrength, setDexterity, setIntelligence } from '../../state';
import Attribute from "./Attribute";


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
            <Attribute decrement={decrementStrength} increment={incrementStrength} nameAtt="Strength" count={strength} />
            <Attribute decrement={decrementDexterity} increment={incrementDexterity} nameAtt="Dexterity" count={dexterity} />
            <Attribute decrement={decrementIntelligence} increment={incrementIntelligence} nameAtt="Intelligence" count={intelligence} />
        </div>
    )
}

export default Attributes;