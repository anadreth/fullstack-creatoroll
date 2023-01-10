
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNewCharacter } from '../../state';

const Race = () => {
    const dispatch = useDispatch();
    const race = useSelector((state) => state.race)
    

    const updateRace = (e) => {
        dispatch(
            setNewCharacter({
                race: e.target.value,
            })
        )

    }   

    return (
        <div>
            <h1>Choose Your Race</h1>
            <form>
                <div>
                    <input type="radio" id="human" value="human" name="race" onChange={updateRace}/>
                    <label htmlFor="human">Human</label>
                </div>
                <div>
                    <input type="radio" id="elf" value="elf" name="race" onChange={updateRace}/>
                    <label htmlFor="elf">Elf</label>
                </div>
            </form>
            <p>Current race is: {race}</p>
        </div>
    )
}

export default Race;