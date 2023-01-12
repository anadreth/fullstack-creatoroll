import React from "react";
import { setBackground } from "../../state";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Background = () => {
    const dispatch = useDispatch();
    const [generated, setGenerated] = useState();

    const handleTextarea = (e) => {
        dispatch(
            setBackground({
                background: e.target.value,
            })
        )
    }
    const generateText = () => {
        setGenerated("7 years ago you were just a pup, but now...")
    }
    return(
        <div>
            <h1>Background</h1>
            <textarea placeholder="Let me tell you a tale..." onChange={handleTextarea}/>
            <p>Out of ideas? Try generating!</p>
            <button onClick={generateText}>Generate</button>
            <p>Generated Background: </p>
            <p>{generated}</p>
        </div>
    )
}

export default Background;