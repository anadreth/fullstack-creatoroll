import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { CreateNewForm, SearchBar } from './../index';
import Info from "./Info";

const PageList = ({type, getUrl, saveUrl, updateValue, title, iconList, error}) => {
    const pageCount = useSelector((state) => state.pageCount);
    const [all, setAll] = useState([]);
    const [searchBar, setSearchBar] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [selected, setSelected] = useState("");
    const [info, setInfo] = useState(false);
    const [loading, setLoading] = useState(false);
    const url = "https://creato-roll-server.onrender.com";
    const current = useSelector((state) => state[type]);
    console.log(current);

    let naming;
    switch(type) {
        case "race": 
            naming = "Race";
            break;
        case "charClass":
            naming = "Class";
            break;
        case "traits":
            naming = "Trait"
            break;
        case "equipment":
            naming = "Equipment"
            break;
    }
  
    const getAll = async () =>{
        setLoading(true);
        const allResponse = await fetch(url + getUrl, {
            method: "GET",
        })
        const response = await allResponse.json();
        setLoading(false);
        setAll(response);
    }

    useEffect(() => {
        getAll();
    }, [pageCount])
    

    const handleInfo = (e) => {
        setSelected(e.target.id);
        setInfo(true);
    }

    return (
        <div className="h-3/4 flex flex-col justify-center items-center">
            <div className="flex justify-between items-center w-80 m-3">
                <h2 className="text-xl text-orange">{title}</h2>
                <button className="text-red" onClick={() => showSearch ? setShowSearch(false) : setShowSearch(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>

            {showSearch ? <SearchBar setSearchBar={setSearchBar}/> : <></>}
            
            <div className="scrollbar-thin scrollbar-corner-red scrollbar-track-white scrollbar-thumb-red h-96 w-80 shadow-md bg-white rounded-lg overflow-scroll mb-3 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    <ul>
                        {!loading ? all.filter(item =>
                        item.title.toLowerCase().slice(0, searchBar.length) === searchBar.toLowerCase()).map(item => 
                        <li key={item.title}>
                        <input checked={current && current._id === item._id ? true : false} className="hidden peer" onChange={updateValue} type="radio" name={type} id={item._id} value={JSON.stringify(item)} />
                        <label className="peer-checked:bg-dark rounded-lg transition-all shadow-md duration-150 m-3 flex justify-between items-center text-orange bg-light" htmlFor={item._id}>
                            <div className= "flex justify-between items-center h-auto w-full px-3 py-2">
                                <img src={item.iconPath} className="aspect-square w-[35px] h-[40px] m-3"/>
                                <div className="w-1/2 flex justify-center items-center flex-col my-2">
                                    <h3>{item.title}</h3>
                                    <div className="w-32">
                                        <p className="break-words text-red text-sm text-center">{item.shortDescription}</p>
                                    </div>
                                    
                                </div>
                                <button className="m-3 text-orange" onClick={handleInfo} id={item._id}>
                                    Info
                                </button>
                            </div>
                        </label>
                        </li>)
                        : 
                        <div className="w-full h-full flex justify-center items-center">
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
            
                {info ? 
                <Info selected={selected} setInfo={setInfo} all={all} />
                : <></>}

                {error ? <p className="text-dark-red mb-3">{error ? "Your character must have a " + naming : ""}</p> 
                : <p className="pb-3 px-3 text-red w-80 text-center">Not finding what you want? <br /> Try creating your own!</p>}
                
            <CreateNewForm getAll={getAll} fetchLink={url + saveUrl} type={type} iconList={iconList} naming={naming} />
        </div>
    )
}

export default PageList;