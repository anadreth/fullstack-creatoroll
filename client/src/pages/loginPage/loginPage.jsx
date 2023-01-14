import React from "react";
import Form from "./Form"
import { useSelector } from "react-redux";
import NavBar from "./../../components/NavBar/NavBar"

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