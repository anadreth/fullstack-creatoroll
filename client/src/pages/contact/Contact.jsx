import React, { useState } from 'react'

import { NavBar, Footer, Error } from './../../components/index'

import { Formik } from "formik";
import * as yup from "yup";
import { send } from 'emailjs-com';
import {motion} from 'framer-motion'

const contactSchema = yup.object().shape({
  subject: yup.string(),
  email:  yup.string().email("invalid email").required("required"),
  message: yup.string().required("required"), 
})

const initialContactValues = {
  subject: "",
  email: "",
  message: "",
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const homeUrl = "https://creato-roll-client.onrender.com/"

  const onSubmit = async (values, onSubmitProps) => {
    setLoading(true);
    setError(null)
    send(
      'service_cz9d09g',
      'template_8a1z9dc',
      values,
      'zIo1A7_py4nBPSuE-',
    )
      .then((response) => {
        
        setLoading(false);
        setSubmitted(true);
        
      })
      .catch((error) => {
        setError("Something went wrong while sending.")
      });
      
  };


  const handleFormSubmit = async (values, onSubmitProps) => {
    await onSubmit(values, onSubmitProps);
    
  }

  return (
    <div className='bg-red text-light w-full h-auto '> 
      <NavBar contact={true} />
      <motion.h1 className={`${screen.width < 1600 ? "hidden" : ""} font-seasons rotate-90 absolute top-80 -right-24 text-light opacity-10 text-[250px]`}
        animate={{opacity: [0, 0.1]}}
      >CONTACT</motion.h1>
      {!submitted && !loading ?
        <div className='flex justify-center items-center'>
        <Formik 
                onSubmit={handleFormSubmit}
                initialValues={initialContactValues}
                validationSchema={contactSchema}>
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
                        <div className='w-3/4 mx-auto text-center mt-44 mb-24 font-poppins'>
                            <div className='w-full'>  
                                <h1 className="text-5xl font-seasons">Get In Touch</h1>
                                <div className='font-poppins p-3 '>
                                  <p >Got a technical issue? Don't like a feature?</p>
                                  <p> Want to work with us?</p>
                                  <p className=''>Let us know.</p> 
                                </div>
                                  
                                <motion.input 
                                    className='p-3 w-full mb-3 focus:outline-none text-red shadow-md rounded-lg'
                                    type="text" 
                                    name="email"
                                    placeholder='Your email' 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}

                                    animate={{x: [-300, 0], opacity: [0, 1]}}
                                    />
                                    
                                <motion.input 
                                    className='p-3 w-full mb-3 focus:outline-none rounded-lg text-red shadow-md'
                                    type="text" 
                                    name="subject"
                                    placeholder='How can we help?' 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.subject}

                                    animate={{x: [-300, 0], opacity: [0, 1]}}
                                    transition={{delay: 0.2}}
                                />

                                <motion.textarea 
                                    className='overflow-scroll p-3 w-full h-96 mb-3 focus:outline-none rounded-lg text-red shadow-md resize-none scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-corner-red scrollbar-track-white scrollbar-thumb-red'
                                    type="text" 
                                    name="message"
                                    placeholder='Your message' 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}

                                    animate={{x: [-300, 0], opacity: [0, 1]}}
                                    transition={{delay: 0.4}}
                                    />  
                            </div> 
                            {errors.email && touched.email && <motion.div className='pb-3 transition-all duration-300'><Error message="Email is required." /></motion.div>}
                            {errors.message && touched.message && <motion.div className='pb-3 transition-all duration-300'><Error message="Message is required." /></motion.div>}
                            <motion.button 
                                animate={{x: [-300, 0], opacity: [0, 1]}}
                                transition={{delay: 0.6}}
                                className='p-3 w-full mb-3 bg-orange text-light shadow-md rounded-lg hover:shadow-white'
                                type="submit" 
                                disabled={isSubmitting}
                                >
                                SUBMIT
                            </motion.button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
        : !submitted && loading ? 

        <div className='bg-red text-light w-full h-screen flex justify-center items-center'>
          <div className='w-3/4 text-center'>
            <h2 className='p-3 text-5xl font-seasons'>Submiting...</h2>
            <p className='font-poppins text-light'>Give us a moment.</p> 
          </div> 
        </div>

        : 
        <div className='bg-red text-light w-full h-screen flex justify-center items-center'>
          <div className='w-3/4 text-center'>
            <h2 className='p-3 text-5xl font-seasons'>{error ? error : "MESSAGE SENT..."}</h2>
            <p className='font-poppins text-light'>{error ? "Please try again later." : "Thank you! We will answer soon."}</p> 
          </div> 
        </div>}
      <Footer color={false} />
    </div>
  )
}

export default Contact