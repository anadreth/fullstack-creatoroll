import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNewCharacter } from '../../state';

const CharClass = () => {
    const dispatch = useDispatch();
    const charClass = useSelector((state) => state.charClass)
    

    const updateClass = (e) => {
        dispatch(
            setNewCharacter({
                charClass: e.target.value,
            })
        )

    }   

    return (
        <div>
            <h1>Choose Your Class</h1>
            <form>
                <div>
                    <input type="radio" id="warrior" value="warrior" name="class" onChange={updateClass}/>
                    <label htmlFor="warrior">Warrior</label>
                </div>
                <div>
                    <input type="radio" id="ranger" value="ranger" name="class" onChange={updateClass}/>
                    <label htmlFor="ranger">Ranger</label>
                </div>
            </form>
            <p>Current Class is: {charClass}</p>
        </div>
    )
}

export default CharClass;