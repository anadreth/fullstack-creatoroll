import React from "react";
import Form from "./Form";
import { useSelector, useDispatch } from "react-redux";
import Race from "../../components/Race/Race";
import { setCreateCharacterPageCount } from '../../state';
import { setCharName } from "../../state";
import Attributes from "../../components/Attributes/Attributes";
import { useNavigate } from "react-router-dom";
import Background from "../../components/Background/Background";
import { setTraits, setCharClass, setEquipment } from '../../state';
import PageList from "../../components/PageList/PageList";



const CreateCharacter = () => {
    const pageCount = useSelector((state) => state.pageCount);
    const currentName = useSelector((state) => state.charName);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const updateClass = (e) => {
        dispatch(
            setCharClass({
                charClass: e.target.value,
            })
        )

    }  
    const updateTraits = (e) => {
        dispatch(
            setTraits({
                traits: e.target.value,
            })
        )
    }   
    const updateEqp = (e) => {
        dispatch(
            setEquipment({
                equipment: e.target.value,
            })
        )
    } 
    const increment = () => {
        if(pageCount < 6){
            dispatch(
                setCreateCharacterPageCount({
                    pageCount: pageCount + 1,
                })
            )
        }   
    }
    const decrement = () => {
        if(pageCount > 0) {
            dispatch(
                setCreateCharacterPageCount({
                    pageCount: pageCount - 1,
                })
            )
        }
    }
    const toInBetween = () => {
        navigate("/create-in-between");
    }
    const handleName = (e) => {
        dispatch (
            setCharName({
                charName: e.target.value,
            })
        )
    }

    return (
        <div>
            {pageCount === 0 ?
            <div>
                <h1>Name your character</h1>
                <input type="text" onChange={handleName} placeholder={currentName ? currentName : "Character Name"}/>
                <button onClick={toInBetween}>Create Other</button>
                <button onClick={increment}>Next</button>
            </div>
            : pageCount === 1 ?
            <div>
                <Race />
                <button onClick={decrement}>Back</button>
                <button onClick={increment}>Next</button> 
            </div>
            : pageCount === 2 ?
            <div> 
                <PageList title="Wizard or Ranger? Oh! Something else entirely..." type="Class" getUrl="/class/getall" saveUrl="/class/save" updateValue={updateClass}/> 
                <button onClick={decrement}>Back</button>
                <button onClick={increment}>Next</button>
            </div>
            : pageCount === 3 ? 
            <div>
                <Attributes />
                <button onClick={decrement}>Back</button>
                <button onClick={increment}>Next</button>
            </div>
            : pageCount === 4 ? 
            <div>
                <Background />
                <button onClick={decrement}>Back</button>
                <button onClick={increment}>Next</button>
            </div>
            : pageCount === 5 ?
            <div>
                <PageList title="Everyone has strengths and weaknesses!"type="Trait" getUrl="/traits/getall" saveUrl="/traits/save" updateValue={updateTraits}/>
                <button onClick={decrement}>Back</button>
                <button onClick={increment}>Next</button>
            </div>
            : 
            <div>
                <PageList title="Sword or that... twig?" type="Equipment" getUrl="/eqp/getall" saveUrl="/eqp/save" updateValue={updateEqp}/>
                <button onClick={decrement}>Back</button>
                <Form />
            </div>
            }
        </div>
    )
}

export default CreateCharacter;