import React from "react";
import Form from "./Form"
import { useSelector } from "react-redux";

const LoginPage = () => {
    const currentUser = useSelector((state) => state.user);
    return (
        <div>
            <Form />
        </div>
    )
}

export default LoginPage;