import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { setLogout } from "../../state";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user);
    

    const handleClickLogOut = async () => {
        dispatch(
            setLogout()
          );
          navigate("/login");
    }

    const handleClickCreateNew = () => {
        navigate("/create-in-between")
    }
    return (
        <div>
            <h1>{currentUser.userName}</h1>
            <ul>
                {currentUser.characters.map(character => <li><p>{character}</p></li>)}
            </ul>
            <button onClick={handleClickCreateNew}>Create Again</button>
            <button onClick={handleClickLogOut}>Log Out</button>
        </div>
    )
}

export default UserDashboard;