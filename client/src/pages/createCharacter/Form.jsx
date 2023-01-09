import React from 'react'
import { Formik } from "formik";
import { useSelector } from 'react-redux';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const characterSchema = yup.object().shape({
    name: yup.string().required("required"),
    race:  yup.string().required("required"),
    charClass: yup.string().required("required"), 
})

const initialValuesCharacter = {
        name: "",
        race: "",
        charClass: "",
}

const Form = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user);
    
    const handleFormSubmit = async(values, onSubmitProps) => { 
        await addCharacter(values, onSubmitProps);
    };


    return(
        <div>
            <Formik 
                onSubmit={handleFormSubmit}
                initialValues={initialValuesCharacter}
                validationSchema={characterSchema}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    resetForm,
                    isSubmitting,
                }) => ( 
                    <form onSubmit={handleSubmit}>
                        <div>
                                <input 
                                    type="text" 
                                    name="name"
                                    placeholder='name' 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                <input 
                                    type="text" 
                                    name="race"
                                    placeholder='race' 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.race}
                                    />
                                <input 
                                    type="text" 
                                    name="charClass"
                                    placeholder='class' 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.charClass}
                                    />
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                >
                                Save Character
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Form;