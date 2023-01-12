import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CreateNewForm from "../CreateNewForm/CreateNewForm";
import SearchBar from "../SearchBar/SearchBar";


const PageList = ({type, getUrl, saveUrl, updateValue}) => {
    const dispatch = useDispatch();
    const [all, setAll] = useState([]);
    const [searchBar, setSearchBar] = useState("");
    const url = "http://localhost:3000"

    const getAll = async () =>{
        const allResponse = await fetch(url + getUrl, {
            method: "GET",
        })
        const response = await allResponse.json();
        setAll(response);
    }

    useEffect(() => {
        getAll();
    }, [])
    
    return (
        <div>
            <h1>Choose Your {type}</h1>
            <SearchBar setSearchBar={setSearchBar}/>
            <form>
                <ul>
                    {all.filter(item =>
                     item.title.slice(0, searchBar.length) === searchBar).map(item => <li key={item.title}><input onClick={updateValue} type="radio" name={type} id={item.title} value={item.title}/><label htmlFor={item.title}>{item.title}</label></li>)
                       }
                </ul>
            </form>
            <button onClick={getAll}>Refresh</button>
            <CreateNewForm fetchLink={url + saveUrl} type={type}/>
        </div>
    )
}

export default PageList;