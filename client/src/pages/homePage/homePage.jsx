import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div>
            HomePage
            <button onClick={() => navigate("/login")}>
                Join
            </button>
        </div>
    )
}

export default HomePage;