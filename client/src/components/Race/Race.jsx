
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
    const [searchBar, setSearchBar] = useState("");
    const icon = useSelector((state) => state.race);


    const getRaces = async () =>{
        const racesResponse = await fetch("http://localhost:3000/race/getall", {
            method: "GET",
        })
        const races = await racesResponse.json();
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
        <div>
            <h1>Choose Your Race</h1>
            <SearchBar setSearchBar={setSearchBar}/>
            <div>
                <ul>
                    {allRaces.filter(race =>
                        race.raceName.slice(0, searchBar.length) === searchBar)
                        .map(race =>
                        <li key={race.raceName}>
                            <img src={race.iconPath} />
                            <input onClick={updateRace} type="radio" name="race" id={race.raceName} value={[race.raceName, race.iconPath]}/>
                            <label htmlFor={race.raceName}>{race.raceName}</label>
                        </li>)
                       }
                </ul>
            </div>
            <button onClick={getRaces}>Refresh</button>
            <CreateNewForm fetchLink={"http://localhost:3000/race/save"} type="Race" iconList={raceIcons}/>
        </div>
    )
}

export default Race;