import React from 'react'
import { Formik } from "formik";
import { useSelector } from 'react-redux';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const characterSchema = yup.object().shape({
    name: yup.string().required("required"),
})

const initialValuesCharacter = {
        name: "",
}

const Form = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user);

    //for FORM SUBMISSION
    const { charName, race, charClass, attributes, background, traits } = useSelector(state => ({
        charName: state.charName,
        race: state.race,
        charClass: state.charClass,
        attributes: state.attributes,
        background: state.background,
        traits: state.traits,
    }));
     
    const saveCharacter = async () => {
        const savedResponse = await fetch("http://localhost:3000/character/save", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: currentUser._id,
                race: race,
            }),
        });
        const saved = await savedResponse.json();
        console.log(saved);
        if(saved) {
            navigate("/dashboard/" + currentUser._id);
        }
    }

    const handleFormSubmit = async(currentUser) => { 
        await saveCharacter(currentUser);
    };


    return(
        <div>
            <button onClick={handleFormSubmit}>CLICK ME</button>
        </div>
    )
}

export default Form;