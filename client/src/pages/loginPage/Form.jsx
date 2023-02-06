import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Formik} from "formik";
import * as yup from "yup";
import {motion} from 'framer-motion'

import { setLogin } from '../../state';
import {Loading} from './../../components/index'

const registerSchema = yup.object().shape({
    userName: yup.string().required("Username is required."),
    email:  yup.string().email("Invalid email.").required("Email is required."),
    password: yup.string().required("Password is required."), 
})

const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email.").required("Email is required."),
    password: yup.string().required("Password is required."),
})

const initialValuesRegister = {
        userName: "",
        email: "",
        password: "",
}

const initialValuesLogin = {
    email: "",
    password: "",
}


const Form = () => {
    const [pageType, setPageType] = useState("login");
    const [exist, setExist] = useState(true);
    const [duplicate, setDuplicate] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLogin = pageType === "login";
    const isRegister = pageType === "register";

    const login = async (values, onSubmitProps) => {
        setLoading(true);
        try {
            const loggedInResponse = await fetch("https://creato-roll-server.onrender.com/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
                });
            
            if (!loggedInResponse.ok) {
                setError("Something went wrong.")
            }

            const loggedIn = await loggedInResponse.json();
            onSubmitProps.resetForm();

            if (loggedIn.message === "User does not exist!") {
                setExist(false);
                setLoading(false);
                return;
            }

            else if (loggedIn) {
                setExist(true);
                dispatch(
                    setLogin({
                    user: loggedIn.user,
                    token: loggedIn.token,
                    })
                );

            navigate("/dashboard/" + loggedIn.user._id);
            setLoading(false);
            } 
        } catch (error) {
            setLoading(false);
            setError("Something went wrong.");
        }
        
      };

      
    const register = async (values, onSubmitProps) => {
        
        setLoading(true);
        try {
            const savedUserResponse = await fetch(
            "https://creato-roll-server.onrender.com/auth/register",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(values),
                }
            );

            const savedUser = await savedUserResponse.json();
            onSubmitProps.resetForm();

            if(savedUser.error.slice(0,6) === "E11000") {
                setDuplicate(true);
                setLoading(false);
                return;
            }

            if (!savedUserResponse.ok) {
                setError("Something went wrong.");
                setLoading(false);
            }
            
            if (savedUser) {
                setDuplicate(false);
                setLoading(false);
                setPageType("login");
            }
        } catch (error) {
            setLoading(false);
            setError("Something went wrong.");
        }
       

    }

    const handleFormSubmit = async(values, onSubmitProps) => { 
        if (isLogin) await login(values, onSubmitProps);
        if (isRegister) await register(values, onSubmitProps);
    };


    return(
        <div className='flex items-center justify-center font-poppins w-screen h-screen text-red bg-light'>
            <div className="flex justify-center items-center w-3/4 p-3">
            <Formik 
                onSubmit={handleFormSubmit}
                initialValues={isLogin ? initialValuesLogin : initialValuesRegister }
                validationSchema={isLogin ? loginSchema : registerSchema}>
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
                        <div className='flex flex-col justify-center items-center'>
                        {isRegister && (
                            <div className='w-80 md:w-96 text-center'>  
                                <h1 className="p-3  text-6xl font-seasons">REGISTER</h1>
                                    <motion.input
                                        animate={{opacity: [0, 1]}}
                                        transition={{duration: 0.1}}
                                        className='p-3 w-full transition-all duration-300 focus:outline-red mb-3 rounded-lg outline-none text-red shadow-md'
                                        type="text" 
                                        name="userName"
                                        placeholder='username' 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.userName}
                                    />
                                {errors.userName && touched.userName ? <motion.div className='pb-3 transition-all duration-300'>{errors.userName}</motion.div> : null}
                                
                                <motion.input 
                                animate={{opacity: [0, 1]}}
                                transition={{duration: 0.2, delay: 0.2}}
                                    className='p-3 w-full transition-all focus:outline-red duration-300 rounded-lg mb-3 outline-none text-red shadow-md'
                                    type="text" 
                                    name="email"
                                    placeholder='email' 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    />
                                {errors.email && touched.email ? <motion.div className='pb-3 transition-all duration-300'>{errors.email}</motion.div> : null}
                               
                                <motion.input 
                                animate={{opacity: [0, 1]}}
                                transition={{duration: 0.3, delay: 0.3}}
                                    className='p-3 w-full transition-all focus:outline-red duration-300 rounded-lg outline-none text-red shadow-md'
                                    type="password" 
                                    name="password"
                                    placeholder='password' 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    helpertext={touched.password && errors.password}
                                    />
                                {errors.password && touched.password  ? <motion.div className='pt-3 transition-all duration-300'>{errors.password }</motion.div> : null}
                                
                            </div> 
                        )}
                        {isLogin && (
                            <div className='w-80 md:w-96 text-center'>
                                <motion.h1 className="p-3 text-6xl font-seasons "
                                    animate={{opacity: [0, 1]}}
                                    transition={{duration: 1}}
                                >LOGIN</motion.h1>
                                <motion.input 
                                    animate={{opacity: [0, 1]}}
                                    transition={{duration: 0.1}}

                                    className='p-3 rounded-lg transition-all focus:outline-red duration-300 w-full mb-3 outline-none text-red shadow-md'
                                    type="text" 
                                    name="email"
                                    placeholder='email' 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    helpertext={touched.email && errors.email}
                                    />
                                    {errors.email && touched.email ? <motion.div className='pb-3 transition-all duration-300'>{errors.email}</motion.div> : null}

                                <motion.input 
                                    animate={{ opacity: [0, 1]}}
                                    transition={{duration: 0.2, delay: 0.2}}
                                    className='p-3 rounded-lg transition-all focus:outline-red duration-300  w-full outline-none text-red shadow-md'
                                    type="password"
                                    name="password"
                                    placeholder='password' 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    helpertext={touched.password && errors.password}
                                    />
                                    {errors.password && touched.password  ? <motion.div className='pt-3 transition-all duration-300'>{errors.password}</motion.div> : null}

                            </div>
                        )}

                            <div className='w-80 flex justify-center items-center p-3'>
                               <img src="https://creato-roll-server.onrender.com/images/little-dice.png" className='aspect-square w-[25px] h-[25px]' alt="- - -"/>
                            </div>

                            <motion.button 
                                 animate={{ opacity: [0, 1]}}
                                 transition={{duration: 0.4, delay: 0.4}}
                            className='p-3 w-80 transition-all duration-150 md:w-96 rounded-lg mb-3 bg-red text-light shadow-md hover:bg-dark-red'
                                type="submit" 
                                disabled={isSubmitting}
                                >
                                {loading && exist ? <Loading /> : isLogin ? "Login" : "Register" }
                            </motion.button>
                            <motion.div className='w-80 md:w-96 text-center'
                                animate={{opacity: [0, 1]}}
                                transition={{duration: 1}}
                            >
                                {isLogin ? 
                                <>
                                    <p className={`text-${!exist ? "orange" : "red"}`}>{error ? error : exist ? "Don't have an acount?" : "User does not exist!"} </p>
                                    <a className={`underline cursor-pointer text-${error ? "red" : !exist ? "orange" : "red"}`} onClick={() => {
                                    setPageType(isLogin ? "register" : "login");
                                    setExist(true);
                                    setError(null);
                                    resetForm();
                                }}>{error ? "Sign up here." : exist ? "Sign up here." : "You need to sign up first." }</a>
                                </> : 
                                <>
                                    <p className={`text-${error ? "orange" : duplicate ? "orange" : "red"}`}>{error ? error : !duplicate ? "Already have an account?" : "This account already exists."}</p>
                                    <a className={`underline cursor-pointer text-${error ? "red" : duplicate ? "orange" : "red"}`} onClick={() => {
                                    setPageType(isLogin ? "register" : "login");
                                    setError(null);
                                    setDuplicate(false);
                                    resetForm();
                                }}>Log in here.</a>
                                </>}
                            </motion.div>
                        </div>
                    </form>
                )}
            </Formik>
            </div>
        </div>
    )
}

export default Form;