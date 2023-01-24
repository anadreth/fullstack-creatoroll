
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRace } from '../../state';
import CreateNewForm from "../CreateNewForm/CreateNewForm";
import SearchBar from "../SearchBar/SearchBar";
import raceIcons from "./../../assets/raceIcons.js"



const Race = () => {
    const dispatch = useDispatch();
    const [allRaces, setAllRaces] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchBar, setSearchBar] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const icon = useSelector((state) => state.race);


    const getRaces = async () =>{
        setLoading(true);
        const racesResponse = await fetch("http://localhost:3000/race/getall", {
            method: "GET",
        })
        const races = await racesResponse.json();
        setLoading(false);
        setAllRaces(races);
    }

    useEffect(() => {
        getRaces();
    }, [])
    
    const updateRace = (e) => {
        const value = e.target.value.split(',');
        let map = new Map();
        map.set("name", value[0]);
        map.set("iconPath", value[1]);
        const object = Object.fromEntries(map);

        dispatch(
            setRace({
                race: object,
            })
        )

    }   

    return (
        <div className="h-3/4 flex flex-col justify-center items-center">
            <div className="flex justify-between items-center w-80 m-3">
                <h2 className="text-xl text-orange">Choose Your Race</h2>
                <button className="text-red" onClick={() => showSearch ? setShowSearch(false) : setShowSearch(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
                <button className="text-red" onClick={getRaces}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:animate-spin">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                </button>
            </div>
               
            {showSearch ? <SearchBar setSearchBar={setSearchBar}/> : <></>}
            <div className="scrollbar-thin scrollbar-corner-red scrollbar-track-white scrollbar-thumb-red h-3/4 w-80 shadow-md bg-white overflow-scroll mb-3">
                <ul className="">
                    {!loading ? allRaces.filter(race =>
                        race.raceName.toLowerCase().slice(0, searchBar.length) === searchBar || race.raceName.toUpperCase().slice(0, searchBar.length) === searchBar)
                        .map(race =>
                        <label onClick={updateRace} htmlFor={race.raceName} className=""  key={race.raceName}>
                            <li className="h-24 text-orange flex justify-between items-center bg-light p-3 m-3 shadow-md group hover:bg-orange hover:text-light" key={race.raceName}>
                                    <img className="aspect-square w-[40px] h-[45px] mx-3" src={race.iconPath} />
                                    <input className="" type="radio" name="race" id={race.raceName} value={[race.raceName, race.iconPath]}/>
                                    <div className="w-1/2 whitespace-nowrap ">
                                        <h3>{race.raceName}</h3>
                                        <p className="text-dark text-sm ">{race.shortDescription}</p>
                                    </div>  
                            </li>
                        </label>)
                       : 
                       <div className="">
                            <button disabled type="button" className="w-44 p-3 mr-2 text-lg text-red bg-white inline-flex justify-center items-center">
                                <svg aria-hidden="true" role="status" className="inline w-7 h-7 mr-3 text-red animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#F69500"/>
                                </svg>
                                Loading...
                            </button>
                        </div>}
                </ul>
            </div>
            <CreateNewForm fetchLink={"http://localhost:3000/race/save"} type="Race" iconList={raceIcons}/>
        </div>
    )
}

export default Race;

