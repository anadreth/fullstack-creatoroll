import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { setLogout } from "../../state";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UserDashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user);
    const [currentCharacters, setCurrentCharacters] = useState([]);


    const getCharacters = async () => {
        const response = await fetch("http://localhost:3000/character/get", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: currentUser._id,
            }),
        })
        const characters = await response.json();
        setCurrentCharacters(characters);
    }

    useEffect(() => {
        getCharacters(currentUser);
    }, [])

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
                {currentCharacters.map(character => <li><p>{character}</p></li>)}
            </ul>
            <button onClick={handleClickCreateNew}>Create Again</button>
            <button onClick={handleClickLogOut}>Log Out</button>
        </div>
    )
}

export default UserDashboard;