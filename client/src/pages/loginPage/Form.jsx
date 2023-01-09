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
        <div>
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
                        <div>
                        {isRegister && (
                            <>
                                <input 
                                    type="text" 
                                    name="userName"
                                    placeholder='username' 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.username}
                                />
                                <input 
                                    type="text" 
                                    name="email"
                                    placeholder='email' 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    />
                                <input 
                                    type="text" 
                                    name="password"
                                    placeholder='password' 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    />
                            </> 
                        )}
                        {isLogin && (
                            <>
                                 <input 
                                    type="text" 
                                    name="email"
                                    placeholder='email' 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    />
                                <input 
                                    type="text" 
                                    name="password"
                                    placeholder='password' 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    />
                            </>
                        )}
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                >
                                {isLogin ? "Login" : "Register" }
                            </button>
                            <p 
                                onClick={() => {
                                    setPageType(isLogin ? "register" : "login");
                                    resetForm();
                                }}
                                >
                                {isLogin ? "Don't have an account? Sign up here." : "Already have an accoutn? Login here."}
                            </p>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Form;