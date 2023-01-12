
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setRace } from '../../state';
import CreateNewForm from "../CreateNewForm/CreateNewForm";
import SearchBar from "../SearchBar/SearchBar";


const Race = () => {
    const dispatch = useDispatch();
    const [allRaces, setAllRaces] = useState([]);
    const [searchBar, setSearchBar] = useState("");

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
        dispatch(
            setRace({
                race: e.target.value,
            })
        )

    }   

    return (
        <div>
            <h1>Choose Your Race</h1>
            <SearchBar setSearchBar={setSearchBar}/>
            <form>
                <ul>
                    {allRaces.filter(race =>
                     race.raceName.slice(0, searchBar.length) === searchBar).map(race => <li key={race.raceName}><input onClick={updateRace} type="radio" name="race" id={race.raceName} value={race.raceName}/><label htmlFor={race.raceName}>{race.raceName}</label></li>)
                       }
                </ul>
            </form>
            <button onClick={getRaces}>Refresh</button>
            <CreateNewForm fetchLink={"http://localhost:3000/race/save"} type="Race" />
        </div>
    )
}

export default Race;