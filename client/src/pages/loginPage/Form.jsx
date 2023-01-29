import React from 'react'
import { useState } from 'react';
import { Formik, Field } from "formik";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../state';

const registerSchema = yup.object().shape({
    userName: yup.string().required("required"),
    email:  yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"), 
})

const loginSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
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
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLogin = pageType === "login";
    const isRegister = pageType === "register";

    const login = async (values, onSubmitProps) => {
        const loggedInResponse = await fetch("http://localhost:3000/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        const loggedIn = await loggedInResponse.json();
        onSubmitProps.resetForm();
        if (loggedIn) {
          dispatch(
            setLogin({
              user: loggedIn.user,
              token: loggedIn.token,
            })
          );
          navigate("/dashboard/" + loggedIn.user._id);
        }
      };

    const register = async (values, onSubmitProps) => {

    const savedUserResponse = await fetch(
      "http://localhost:3000/auth/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    );
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();

    if (savedUser) {
      setPageType("login");
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
                                    <input
                                        className='p-3 w-full transition-all duration-300 focus:outline-red mb-3 rounded-lg outline-none text-red shadow-md'
                                        type="text" 
                                        name="userName"
                                        placeholder='username' 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.userName}
                                    />
                                {errors.userName && touched.userName ? <div className='pb-3 transition-all duration-300'>{errors.userName}</div> : null}
                                
                                <input 
                                    className='p-3 w-full transition-all focus:outline-red duration-300 rounded-lg mb-3 outline-none text-red shadow-md'
                                    type="text" 
                                    name="email"
                                    placeholder='email' 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    />
                                {errors.email && touched.email ? <div className='pb-3 transition-all duration-300'>{errors.email}</div> : null}
                               
                                <input 
                                    className='p-3 w-full transition-all focus:outline-red duration-300 rounded-lg outline-none text-red shadow-md'
                                    type="password" 
                                    name="password"
                                    placeholder='password' 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    error={
                                        Boolean(touched.password) && Boolean(errors.password)
                                      }
                                    helpertext={touched.password && errors.password}
                                    />
                                {errors.password && touched.password  ? <div className='pb-3 transition-all duration-300'>{errors.password }</div> : null}
                                
                            </div> 
                        )}
                        {isLogin && (
                            <div className='w-80 md:w-96 text-center'>
                                <h1 className="p-3 text-6xl font-seasons ">LOGIN</h1>
                                <input 
                                    className='p-3 rounded-lg transition-all focus:outline-red duration-300 w-full mb-3 outline-none text-red shadow-md'
                                    type="text" 
                                    name="email"
                                    placeholder='email' 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    error={
                                        Boolean(touched.email) && Boolean(errors.email)
                                      }
                                    helpertext={touched.email && errors.email}
                                    />
                                    {errors.email && touched.email ? <div className='pb-3 transition-all duration-300'>{errors.email}</div> : null}

                                <input 
                                    className='p-3 rounded-lg transition-all focus:outline-red duration-300  w-full outline-none text-red shadow-md'
                                    type="password"
                                    name="password"
                                    placeholder='password' 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    error={
                                        Boolean(touched.password) && Boolean(errors.password)
                                      }
                                    helpertext={touched.password && errors.password}
                                    />
                                    {errors.password && touched.password  ? <div className='pb-3 transition-all duration-300'>{errors.password}</div> : null}

                            </div>
                        )}

                            <div className='w-80 flex justify-center items-center p-3'>
                               <img src="http://localhost:3000/images/little-dice.png" className='aspect-square w-[25px] h-[25px]' alt="- - -"/>
                            </div>

                            <button 
                            className='p-3 w-80 transition-all duration-150 md:w-96 rounded-lg mb-3 bg-red text-light shadow-md hover:bg-dark-red'
                                type="submit" 
                                disabled={isSubmitting}
                                >
                                {isLogin ? "Login" : "Register" }
                            </button>
                            <div className='w-80 md:w-96 text-center'>
                                {isLogin ? 
                                <>
                                    <p>Don't have an acount?</p>
                                    <a className='underline' onClick={() => {
                                    setPageType(isLogin ? "register" : "login");
                                    resetForm();
                                }}>Sign up here.</a>
                                </> : 
                                <>
                                    <p>Already have an account?</p>
                                    <a className='underline' onClick={() => {
                                    setPageType(isLogin ? "register" : "login");
                                    resetForm();
                                }}>Log in here.</a>
                                </>}
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
            </div>
        </div>
    )
}

export default Form;