import React from "react";
import { useNavigate } from "react-router-dom";

const CreateInBetween = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate("/create-character") }>Create New Character</button>
            <button onClick={() => navigate("/create-adventure") }>Create New Adenture</button>
        </div>
    )
}

export default CreateInBetween;