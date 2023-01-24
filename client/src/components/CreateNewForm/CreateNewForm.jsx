import React from "react";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";



const CreateNewForm = ({fetchLink, type, iconList}) => {
    const [visible, setVisible] = useState(false);

    const createNewSchema = yup.object().shape({
        title: yup.string().required("required"),
        shortDescription:  yup.string().required("required"),
        description: yup.string().required("required"), 
        iconPath: yup.string(),
    })
    
    const initialValuesCreateNew = {
            title: "",
            shortDescription: "",
            description: "",
            iconPath: "",
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
            if (savedNew) {
              setVisible(false);
            }   
    }

    const handleFormSubmit = async(values, onSubmitProps) => { 
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
                       <div className="bg-light absolute top-0 left-0 h-screen w-full p-3 flex flex-col justify-center items-center">
                           <>
                            {iconList !== "" ? 
                            <div className="w-80 flex justify-between mb-3 items-center">
                                <select className="shadow-md p-3 focus:outline-red" name="iconPath" value={values.iconPath} onChange={handleChange} onBlur={handleBlur}>
                                <option value="" disabled>Select Icon</option>
                                {iconList.map(item => <option name="iconPath" key={item.id} value={item.link}>{item.id}</option>)}
                                </select>
                                {values.iconPath ? <img src={values.iconPath} alt="icon" className="m-auto aspect-square w-[40px] h-[45px]"/> : <></> }
                            </div>
                                
                                : <></>
                            }
                                                              
                                <input 
                                    className="p-3 mb-3 w-80 shadow-md focus:outline-none"
                                   type="text" 
                                   name="title"
                                   placeholder='title' 
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.title}
                               />
                               <input 
                                    className="p-3 mb-3 w-80 shadow-md focus:outline-none"
                                   type="text" 
                                   name="shortDescription"
                                   placeholder='shortDescription' 
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.shortDescription}
                                   />
                               <textarea
                                    className="focus:outline-none p-3 resize-none mb-3 w-80 h-44 overflow-scroll shadow-md scrollbar-thin scrollbar-corner-red scrollbar-track-white scrollbar-thumb-red"
                                   type="text" 
                                   name="description"
                                   placeholder='description' 
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.description}
                                   />
                           </> 
                           <button 
                                className="bg-orange text-light shadow-md w-44 p-3 mb-3"
                               type="submit" 
                               disabled={isSubmitting}
                               >
                               Save 
                           </button>
                           <button className="bg-red text-light shadow-md w-44 p-3" onClick={hideVisible}>Cancel</button>
                       </div>     
                   </form>
                   
               )}
           </Formik>
           
            }
            <button className="bg-red mb-3 shadow-md text-light w-80 p-3" onClick={showHidden}>Create New {type}</button>
            
        </div>
    )
}

export default CreateNewForm;






