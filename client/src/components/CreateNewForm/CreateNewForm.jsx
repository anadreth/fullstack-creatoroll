import React, { useState, useRef } from "react";

import { Formik } from "formik";
import * as yup from "yup";

import {motion, AnimatePresence, LayoutGroup} from 'framer-motion'

import {Error, Loading} from './../index'




const CreateNewForm = ({fetchLink, type, iconList, getAll, naming}) => {
    const [visible, setVisible] = useState(false);
    const [show, setShow] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(false);
    const [serverError, setServerError] = useState(null);
    const formRef = useRef();

    const handleConfirm = () => {
        setError(false);
       if(!formRef.current.values.title ||  !formRef.current.values.shortDescription || !formRef.current.values.iconPath) {
            setError(true);
            return;
       } 

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
        setServerError(null);
        try {
            const savedNewResponse = await fetch(
                fetchLink,
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(values),
                }
              );

              if (!savedNewResponse.ok) {
                setServerError("Something went wrong.");
                return;
              }
              const savedNew = await savedNewResponse.json();
              onSubmitProps.resetForm();
              if (savedNew) {
                setVisible(false);
              } 

        }   catch (error) {
            setServerError("Something went wrong.")
        }
             
    }

    const handleFormSubmit = async(values, onSubmitProps) => { 
        setSubmitting(true);
        await createNew(values, onSubmitProps);
        getAll();
        setSubmitting(false);
        setConfirm(false);
    };

    const showHidden = () => {
        setVisible(true);
    }
    const hideVisible = () => {
        setVisible(false);
        setShow(false);
        setError(false);
    }

    const getDescription = async() => {
        setServerError(null);
        setLoading(true);
        try {
            const responseDescription = await fetch('https://creato-roll-server.onrender.com/background/description', {
                method:'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: type,
                    name: formRef.current.values.title,
                    shortDescription: formRef.current.values.shortDescription,
                }),
            })

            if (!responseDescription.ok) {
                setServerError("Something went wrong.")
                return;
            }

            const description = await responseDescription.json();
            setLoading(false);
            formRef.current.values.description = description;
        } catch (error) {
            setServerError("Something went wrong.")
        }
        
    }

    return (
        
        <motion.div
            layout
            transition={{
                opacity: { ease: "linear" },
                layout: { duration: 0.1 }
              }}
        >
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
                <LayoutGroup>
                   <form onSubmit={handleSubmit}
                    
                   >
                       <motion.div className="bg-light absolute top-0 left-0 h-screen w-full p-3 flex flex-col justify-between items-center"
                            animate={{opacity: [0, 1]}}
                            transition={{duration: 0.1}}
                       >
                        <div className="mt-[73px]"></div>
                           <div className="h-full md:h-4/6 flex flex-col justify-start items-center my-auto">

                            {iconList !== "" ? 
                            <motion.div className="w-80 flex justify-between mb-3 items-center"
                                animate={{opacity: [0, 1]}}
                                transition={{duration: 0.1, delay: 0.1}}
                            >
                                <select className="shadow-md rounded-lg p-3 focus:outline-none text-opacity-60  text-dark" name="iconPath" value={values.iconPath} onChange={handleChange} onBlur={handleBlur}>
                                <option value="" disabled>Select Icon</option>
                                {iconList.map(item => <option name="iconPath" key={item.id} value={item.link}>{item.id.slice(0, 1).toUpperCase() + item.id.slice(1).toLowerCase()}</option>)}
                                </select>
                                {values.iconPath &&
                                <motion.img src={values.iconPath} alt="icon" className="m-auto aspect-square w-[40px] h-[45px]"
                                    animate={{scale: [0, 1]}}
                                />}
                                <button type="reset" className="text-red" onClick={resetForm}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:animate-spin">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    </svg>
                                </button>
                            </motion.div>
                                : <></>
                            }
                                                              
                                <motion.input 
                                    animate={{opacity: [0, 1]}}
                                    transition={{duration: 0.1, delay: 0.2}}
                                    className="p-3 rounded-lg mb-3 w-80 shadow-md focus:outline-none"
                                   type="text" 
                                   name="title"
                                   placeholder='Title' 
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.title}
                               />
                               {errors.title && touched.title && <div className="text-red mb-3"><Error message="Title is required" /></div>}
                               <motion.input 
                                    animate={{opacity: [0, 1]}}
                                    transition={{duration: 0.1, delay: 0.3}}
                                    className="p-3 rounded-lg mb-3 w-80 shadow-md focus:outline-none"
                                   type="text" 
                                   name="shortDescription"
                                   placeholder='One line description' 
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.shortDescription}
                                   />
                                {errors.shortDescription && touched.shortDescription && <div className="text-red mb-3"><Error message="One line description is required" /></div>}

                                    <motion.textarea
                                       
                                        animate={{opacity: [0, 1]}}
                                        transition={{duration: 0.2, delay: 0.4,}}
                                        className="focus:outline-none rounded-lg p-3 resize-none mb-3 w-80 h-full overflow-scroll shadow-md scrollbar-thin scrollbar-corner-red scrollbar-track-white scrollbar-thumb-red scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
                                        type="text" 
                                        name="description"
                                        placeholder={"Describe it! \nLet your imagination run wild..."}
                                        onClick={handleShow} 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.description}
                                        />
                              
                                    {show && 
                                    <motion.div className="w-80 bg-red rounded-lg text-light shadow-md mb-3 p-3 text-center"
                                        animate={{scale: [0, 1]}}
                                    >
                                        {!loading ? 
                                        <div>
                                            <p className="pb-3">Need a bit of help?</p>
                                            <button type="button" onClick={getDescription} className="p-3 transition-all duration-150 rounded-lg shadow-md bg-orange hover:shadow-yogurt">Generate Decription</button>
                                        </div>
                                        :
                                        <div>
                                            <p className="pb-3 ">Give us a second...</p>
                                            <button disabled type="button" className="rounded-lg w-44 p-3 mr-2 text-lg text-red bg-white shadow-md inline-flex justify-center items-center">
                                                <Loading />
                                            </button>
                                        </div>
                                        }
                                    </motion.div> }
                                    
                                {serverError && <div className="text-red pb-3 w-80 text-center" ><Error message={serverError} /></div>} 
                                {error && <div className="text-red pb-3 w-80 text-center" ><Error message="New Asset must have Icon, Title and One line description!" /></div>}
                                <div className="flex justify-between items-center mt-auto w-80">
                                    <button className="bg-red hover:bg-dark-red transition-all duration-150 rounded-lg  text-light shadow-md w-32 p-3" onClick={hideVisible}>Cancel</button>
                                    <button 
                                        className="bg-red hover:bg-orange hover:text-white transition-all duration-150 rounded-lg text-light shadow-md w-32 p-3"
                                        type="button" 
                                        onClick={handleConfirm}
                                    >
                                        Create!
                                    </button>

                                    <AnimatePresence>
                                    {confirm && 
                                    <motion.div className="top-0 left-0 h-screen w-full absolute flex flex-col justify-center items-center"
                                        initial={{scale: 0, opacity: 0}}
                                        animate={{scale: 1, opacity: 1}}
                                        exit={{scale: 0, opacity: 0}}
                                        transition={{duration: 0.2, ease: "easeInOut"}}
                                    >
                                        <div className="flex justify-center items-center flex-col rounded-lg w-80 md:w-96 border-red border-2 bg-red text-light p-3 ">
                                            <p className="p-3 text-center">This asset will be also available for other users to use. <br /> Do you still wish to continue?</p>
                                            <div className="w-full flex justify-around items-center m-3">
                                                <button 
                                                    className="bg-dark-red hover:shadow-none transition-all duration-150 rounded-lg text-light shadow-md w-32 p-3"
                                                    onClick={handleConfirm}>
                                                No?
                                                </button>
                                                {submitting ?
                                                <p className="bg-orange hover:shadow-white hover:text-white hover:shadow-lg transition-all duration-150 rounded-lg text-light shadow-md w-32 p-3">Processing...</p>
                                                : <button className="bg-orange hover:shadow-white hover:text-white hover:shadow-lg transition-all duration-150 rounded-lg text-light shadow-md w-32 p-3"
                                                        type="submit" 
                                                        disabled={isSubmitting}>
                                                Yes!
                                                </button>
                                                }
                                            </div>
                                        </div>
                                    </motion.div>
                                    }
                                    </AnimatePresence>
                                </div>                
                           </div> 
                       </motion.div>     
                   </form>
                   </LayoutGroup>
               )}
           </Formik>
           
            }
            <motion.button className="bg-red mb-3 transition-all duration-150 shadow-md text-light w-80 p-3 rounded-lg hover:bg-orange hover:text-white" onClick={showHidden} layout>Create New {naming}</motion.button>
            
        </motion.div>
    )
}

export default CreateNewForm;






