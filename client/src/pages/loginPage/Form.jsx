import React from 'react'
import { useState } from 'react';
import { Formik } from "formik";
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
                        <div className='text-center'>
                        {isRegister && (
                            <div>  
                                <h1 className="p-3 text-5xl font-seasons">REGISTER</h1>
                                <input 
                                    className='p-3 w-full mb-3 focus:outline-red text-red shadow-md'
                                    type="text" 
                                    name="userName"
                                    placeholder='username' 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.username}
                                />
                                <input 
                                    className='p-3 w-full mb-3 focus:outline-red text-red shadow-md'
                                    type="text" 
                                    name="email"
                                    placeholder='email' 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    />
                                <input 
                                    className='p-3 w-full mb-3 focus:outline-red text-red shadow-md'
                                    type="password" 
                                    name="password"
                                    placeholder='password' 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    />
                            </div> 
                        )}
                        {isLogin && (
                            <div>
                                <h1 className="p-3 text-5xl font-seasons ">LOGIN</h1>
                                <input 
                                    className='p-3 w-full mb-3 focus:outline-red text-red shadow-md'
                                    type="text" 
                                    name="email"
                                    placeholder='email' 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    />
                                <input 
                                    className='p-3 w-full mb-3 focus:outline-red text-red shadow-md'
                                    type="password"
                                    name="password"
                                    placeholder='password' 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    />
                            </div>
                        )}
                            <button 
                            className='p-3 w-full mb-3 bg-red text-light shadow-md'
                                type="submit" 
                                disabled={isSubmitting}
                                >
                                {isLogin ? "Login" : "Register" }
                            </button>
                            <div>
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