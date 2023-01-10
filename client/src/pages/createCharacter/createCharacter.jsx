import React from "react";
import Form from "./Form";
import { useSelector, useDispatch } from "react-redux";
import Race from "../../components/Race/Race";
import { setCreateCharacterPageCount } from '../../state';
import CharClass from "../../components/CharClass/charClass";
import Attributes from "../../components/Attributes/Attributes";


const CreateCharacter = () => {
    const pageCount = useSelector((state) => state.pageCount);
    const dispatch = useDispatch();

    console.log(pageCount);
    const increment = () => {
        if(pageCount < 5){
            dispatch(
                setCreateCharacterPageCount({
                    pageCount: pageCount + 1,
                })
            )
        }   
    }

    const decrement = () => {
        if(pageCount > 1) {
            dispatch(
                setCreateCharacterPageCount({
                    pageCount: pageCount - 1,
                })
            )
        }
    }

    return (
        <div>
            {pageCount === 1 ?
            <Race />
            : pageCount === 2 ? 
            <CharClass /> 
            : pageCount === 3 ? 
            <Attributes />
            : pageCount === 4 ? 
            <h1>Background</h1> 
            :
            <h1>Traits</h1>}

            <button onClick={decrement}>Back</button>
            <button onClick={increment}>Next</button>
            <p>Page number is: {pageCount}</p>
            <Form />
        </div>
    )
}

export default CreateCharacter;