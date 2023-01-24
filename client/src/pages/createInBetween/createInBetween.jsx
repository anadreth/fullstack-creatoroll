import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCharName, setCreateCharacterPageCount } from "../../state";
import UserNavBar from "../userDashboard/userNavBar"

const CreateInBetween = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user);

    const handleCreateCharacter = () => {
        dispatch (
            setCharName({
                charName: "",
            })
        )
        dispatch(
            setCreateCharacterPageCount({
                pageCount: 0,
            })
        )
        navigate("/create-character");
    }
    
    return (
        <div className="bg-light h-screen font-poppins overflow-hidden">
            <UserNavBar />
            <div className="h-[72.5px]"></div>
                <div className="grid grid-cols-1 grid-rows-2 place-items-center w-full md:grid-cols-2 md:grid-rows-1 md:h-3/4 md:text-xl">
                    <div className="w-3/4 h-3/4 p-3 bg-white shadow-md grid grid-rows-3 text-center align-center">
                        <div className="flex justify-center items-center">
                            <h2 className="text-orange text-xl md:text-2xl">CREATE CHARACTER</h2>
                        </div>
                        <div className="flex justify-center items-center mb-3">
                            <p className="text-red">Create new <br />original character</p>
                        </div>
                        <button onClick={handleCreateCharacter} className="bg-red p-3 shadow-md text-light" >Character</button>
                    </div>
                    <div className="w-3/4 h-3/4 p-3 shadow-md bg-white  grid grid-rows-3 text-center align-center">
                        <div className="flex justify-center items-center">
                            <h2 className="text-orange text-xl md:text-2xl">CREATE ADVENTURE</h2>
                        </div>
                        <div className="flex justify-center items-center mb-3">
                            <p className="text-red mb-3">Create full fledged <br /> DND adventure</p>
                        </div>
                        <button onClick={() => navigate("/create-adventure") } className="shadow-md bg-red p-3 text-light">Create New Adenture</button>
                    </div>  
                    <div className="p-3 md:col-span-2">
                        <button className="bg-white shadow-md text-orange border-orange border-2 p-3" onClick={() => navigate("/dashboard/" + currentUser._id ) } >To Dashboard</button>
                    </div>
                </div>       
        </div>
    )
}

export default CreateInBetween;