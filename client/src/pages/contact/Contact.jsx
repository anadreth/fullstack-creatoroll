import React from 'react'
import NavBar from './../../components/NavBar/NavBar'
import Footer from './../../components/Footer/Footer'
import { useState } from 'react';
import { Formik } from "formik";
import * as yup from "yup";
import { send } from 'emailjs-com';

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
  const homeUrl = "http://localhost:5173/"

  const onSubmit = async (values, onSubmitProps) => {
    send(
      'service_cz9d09g',
      'template_8a1z9dc',
      values,
      'zIo1A7_py4nBPSuE-',
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
        
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };


  const handleFormSubmit = async (values, onSubmitProps) => {
    console.log(values);
    await onSubmit(values, onSubmitProps);
    
  }

  return (
    <div className='bg-red text-light w-full h-auto'>
      <NavBar />
      {!submitted ?
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
                            <>  
                                <h1 className="text-5xl font-seasons">Get In Touch</h1>
                                <div className='font-poppins p-3 '>
                                  <p >Got a technical issue? Don't like a feature?</p>
                                  <p> Want to work with us?</p>
                                  <p className=''>Let us know.</p> 
                                </div>
                                  
                                <input 
                                    className='p-3 w-full mb-3 focus:outline-none text-red shadow-md rounded-lg'
                                    type="text" 
                                    name="email"
                                    placeholder='Your email' 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    />
                                <input 
                                    className='p-3 w-full mb-3 focus:outline-none rounded-lg text-red shadow-md'
                                    type="text" 
                                    name="subject"
                                    placeholder='How can we help?' 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.subject}
                                />
                                <textarea 
                                    className='overflow-scroll p-3 w-full h-96 mb-3 focus:outline-none rounded-lg text-red shadow-md resize-none scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-corner-red scrollbar-track-white scrollbar-thumb-red'
                                    type="text" 
                                    name="message"
                                    placeholder='Your message' 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    />
                            </> 
                            <button 
                                className='p-3 w-full mb-3 bg-orange text-light shadow-md rounded-lg hover:shadow-white'
                                type="submit" 
                                disabled={isSubmitting}
                                >
                                SUBMIT
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
        : 
        <div className='bg-red text-light w-full h-screen flex justify-center items-center'>
          <div className='w-3/4 text-center'>
            <h2 className='p-3 text-5xl font-seasons'>MESSAGE SENT...</h2>
            <div className='p-3 w-full bg-orange text-light shadow-md font-poppins'>
              <a href={homeUrl + "contact"} >Send New Message</a>   
            </div>
          </div> 
        </div>}
      <Footer />
    </div>
  )
}

export default Contact