import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNewCharacter } from '../../state';

const Attributes = () => {
    const dispatch = useDispatch();
    const strength = useSelector((state) => state.strength)
    
    const incrementStrength = () => {
        dispatch(
            setNewCharacter({
                    strength: strength + 1,
            })
        )
    }
    const decrementStrength = () => {
        dispatch(
            setNewCharacter({
                strength: strength - 1,
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
        </div>
    )
}

export default Attributes;