import React from "react";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";

const CreateNewForm = ({fetchLink, type}) => {
    const [visible, setVisible] = useState(false);
    const createNewSchema = yup.object().shape({
        title: yup.string().required("required"),
        shortDescription:  yup.string().required("required"),
        description: yup.string().required("required"), 
    })
    
    const initialValuesCreateNew = {
            title: "",
            shortDescription: "",
            description: "",
    }

    const createNew = async(values, onSubmitProps) => {
            const savedNewResponse = await fetch(
              fetchLink,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
              }
            );
            const savedNew = await savedNewResponse.json();
            onSubmitProps.resetForm();
            console.log(savedNew);
            if (savedNew) {
              setVisible(false);
            }   
    }

    const handleFormSubmit = async(values, onSubmitProps) => { 
        console.log("submitted");
        await createNew(values, onSubmitProps);
    };

    const showHidden = () => {
        setVisible(true);
    }
    const hideVisible = () => {
        setVisible(false);
    }
    return (
        <div>
            {!visible ? <></> :
               <Formik 
               onSubmit={handleFormSubmit}
               initialValues={initialValuesCreateNew}
               validationSchema={createNewSchema}>
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
                           <>
                               <input 
                                   type="text" 
                                   name="title"
                                   placeholder='title' 
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.title}
                               />
                               <input 
                                   type="text" 
                                   name="shortDescription"
                                   placeholder='shortDescription' 
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.shortDescription}
                                   />
                               <input 
                                   type="text" 
                                   name="description"
                                   placeholder='description' 
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.description}
                                   />
                           </> 
                           <button 
                               type="submit" 
                               disabled={isSubmitting}
                               >
                               Save 
                           </button>
                       </div>
                       <button onClick={hideVisible}>Hide</button>
                   </form>
                   
               )}
           </Formik>
           
            }
            <button onClick={showHidden}>Create New {type}</button>
            
        </div>
    )
}

export default CreateNewForm;






