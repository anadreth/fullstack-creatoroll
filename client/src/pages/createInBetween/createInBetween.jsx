import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCreateCharacterPageCount } from "../../state";

const CreateInBetween = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user);
    const handleCreateCharacter = () => {
        dispatch(
            setCreateCharacterPageCount({
                pageCount: 0,
            })
        )
        navigate("/create-character");
    }
    
    return (
        <div>
            <button onClick={handleCreateCharacter}>Create New Character</button>
            <button onClick={() => navigate("/create-adventure") }>Create New Adenture</button>
            <button onClick={() => navigate("/dashboard/" + currentUser._id ) }>To Dashboard</button>
        </div>
    )
}

export default CreateInBetween;