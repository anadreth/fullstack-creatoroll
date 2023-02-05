import React from "react";
import { useSelector } from "react-redux";

import Form from "./Form"
import { NavBar } from './../../components/index'

const LoginPage = () => {
    const currentUser = useSelector((state) => state.user);
    return (
        <div>
            <NavBar />
            <Form />
        </div>
    )
}

export default LoginPage;