import React from "react";
import { Formik } from "formik";
import { useState, useRef } from "react";
import * as yup from "yup";




const CreateNewForm = ({fetchLink, type, iconList, getAll, naming}) => {
    const [visible, setVisible] = useState(false);
    const [show, setShow] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [loading, setLoading] = useState(false);
    const formRef = useRef();

    const handleConfirm = () => {
        if(confirm) {
            setConfirm(false);
        } else {
            setConfirm(true);
        }
    }
    const handleShow = () => {
        if(!show) {
            setShow(true);
        }
        
    }

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
        getAll();
        setConfirm(false);
    };

    const showHidden = () => {
        setVisible(true);
    }
    const hideVisible = () => {
        setVisible(false);
        setShow(false);
    }

    const getDescription = async() => {
        
        setLoading(true);
        const responseDescription = await fetch('http://localhost:3000/background/description', {
            method:'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                type: type,
                name: formRef.current.values.title,
                shortDescription: formRef.current.values.shortDescription,
            }),
        })
        const description = await responseDescription.json();
        setLoading(false);
        formRef.current.values.description = description;
    }

    return (
        <div>
            {!visible ? <></> :
               <Formik 
               onSubmit={handleFormSubmit}
               initialValues={initialValuesCreateNew}
               validationSchema={createNewSchema}
               innerRef={formRef}>
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
                           <div className="h-3/4 flex flex-col justify-center items-center">

                            {iconList !== "" ? 
                            <div className="w-80 flex justify-between mb-3 items-center">
                                <select className="shadow-md rounded-lg p-3 focus:outline-none text-opacity-60  text-dark" name="iconPath" value={values.iconPath} onChange={handleChange} onBlur={handleBlur}>
                                <option value="" disabled>Select Icon</option>
                                {iconList.map(item => <option name="iconPath" key={item.id} value={item.link}>{item.id.slice(0, 1).toUpperCase() + item.id.slice(1).toLowerCase()}</option>)}
                                </select>
                                {values.iconPath ? <img src={values.iconPath} alt="icon" className="m-auto aspect-square w-[40px] h-[45px]"/> : <></> }
                                <button type="reset" className="text-red" onClick={resetForm}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:animate-spin">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    </svg>
                                </button>
                            </div>
                                : <></>
                            }
                                                              
                                <input 
                                    className="p-3 rounded-lg mb-3 w-80 shadow-md focus:outline-none"
                                   type="text" 
                                   name="title"
                                   placeholder='Title' 
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.title}
                               />
                               {errors.title && touched.title ? <div className="text-red mb-3">Title is required.</div> : null}
                               <input 
                                    className="p-3 rounded-lg mb-3 w-80 shadow-md focus:outline-none"
                                   type="text" 
                                   name="shortDescription"
                                   placeholder='One line description' 
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.shortDescription}
                                   />
                                {errors.title && touched.title ? <div className="text-red mb-3">You need to create short description.</div> : null}

                                    <textarea
                                        className="focus:outline-none rounded-lg p-3 resize-none mb-3 w-80 h-80 overflow-scroll shadow-md scrollbar-thin scrollbar-corner-red scrollbar-track-white scrollbar-thumb-red scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
                                        type="text" 
                                        name="description"
                                        placeholder={"Describe it! \nLet your imagination run wild..."}
                                        onClick={handleShow} 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.description}
                                        />
                              
                                    {show ? 
                                    <div className="w-80 bg-red rounded-lg text-light shadow-md mb-3 p-3 text-center">
                                        {!loading ? 
                                        <div>
                                            <p className="pb-3">Need a bit of help?</p>
                                            <button type="button" onClick={getDescription} className="p-3 transition-all duration-150 rounded-lg shadow-md bg-orange hover:shadow-yogurt">Generate Decription</button>
                                        </div>
                                        :
                                        <div>
                                            <p className="pb-3 ">Give us a second...</p>
                                            <button disabled type="button" className="rounded-lg w-44 p-3 mr-2 text-lg text-red bg-white shadow-md inline-flex justify-center items-center">
                                                <svg aria-hidden="true" role="status" className="inline w-6 h-6 mr-3 text-red animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#F69500"/>
                                                </svg>
                                                Loading...
                                            </button>
                                        </div>
                                        }
                                    </div> 
                                    : <></> 
                                    }
                                    
                                    
                                    
                                <div className="flex justify-between items-center w-80">
                                    <button className="bg-red hover:bg-dark-red transition-all duration-150 rounded-lg  text-light shadow-md w-32 p-3" onClick={hideVisible}>Cancel</button>
                                    <button 
                                        className="bg-red hover:bg-orange hover:text-white transition-all duration-150 rounded-lg text-light shadow-md w-32 p-3"
                                        type="button" 
                                        onClick={handleConfirm}
                                    >
                                        Create!
                                    </button>
                                    {!confirm ? <></> : 
                                    <div className="top-0 left-0 h-screen w-full absolute flex flex-col justify-center items-center">
                                        <div className="flex justify-center items-center flex-col rounded-lg w-80 md:w-96 border-red border-2 bg-red text-light p-3 ">
                                            <p className="p-3 text-center">This asset will be also available for other users to use. <br /> Do you still wish to continue?</p>
                                            <div className="w-full flex justify-around items-center m-3">
                                                <button 
                                                    className="bg-dark-red hover:shadow-none transition-all duration-150 rounded-lg text-light shadow-md w-32 p-3"
                                                    onClick={handleConfirm}>
                                                No?
                                                </button>
                                                <button className="bg-orange hover:shadow-white hover:text-white hover:shadow-lg transition-all duration-150 rounded-lg text-light shadow-md w-32 p-3"
                                                        type="submit" 
                                                        disabled={isSubmitting}>
                                                Yes!
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    }
                                </div>                
                           </div> 
                       </div>     
                   </form>
                   
               )}
           </Formik>
           
            }
            <button className="bg-red mb-3 transition-all duration-150 shadow-md text-light w-80 p-3 rounded-lg hover:bg-orange hover:text-white" onClick={showHidden}>Create New {naming}</button>
            
        </div>
    )
}

export default CreateNewForm;






