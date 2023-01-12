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
            }),
            setDexterity({
                dexterity: 10,
            }),
            setIntelligence({
                intelligence: 10,
            }),
        )
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
        <div>
            <h1>Choose Your Attributes</h1>
            <div>
                <button onClick={decrementStrength}>-</button>
                <p>Strength</p>
                <p>{strength}</p>
                <button onClick={incrementStrength}>+</button>
            </div>
            <div>
                <button onClick={decrementDexterity}>-</button>
                <p>Dexterity</p>
                <p>{dexterity}</p>
                <button onClick={incrementDexterity}>+</button>
            </div>
            <div>
                <button onClick={decrementIntelligence}>-</button>
                <p>Intelligence</p>
                <p>{intelligence}</p>
                <button onClick={incrementIntelligence}>+</button>
            </div>
        </div>
    )
}

export default Attributes;