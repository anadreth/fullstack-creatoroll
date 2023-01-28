import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    token: null,
    characters: [],
    pageCount: 0,
    charName: null,
    race: null,
    charClass: null,
    strength: 10,
    dexterity: 10,
    intelligence: 10,
    equipment: null,
    background: null,
    traits: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;  
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setCharacters: (state, action) => {
            if (state.user) {
                state.user.characters = action.payload.characters;
            } else {
                console.error("user character non-existent")
            }
        },
        setCharName: (state, action) => {
            state.charName = action.payload.charName;
        },
        setRace: (state, action) => {
            state.race = action.payload.race;
        },
        setCharClass: (state, action) => {
            state.charClass = action.payload.charClass;
        },
        setStrength: (state, action) => {
            state.strength = action.payload.strength;
        },
        setDexterity: (state, action) => {
            state.dexterity = action.payload.dexterity;
        },
        setIntelligence: (state, action) => {
            state.intelligence = action.payload.intelligence;
        },
        setBackground: (state, action) => {
            state.background = action.payload.background;
        },
        setTraits: (state,action) => {
            state.traits = action.payload.traits;
        },
        setCreateCharacterPageCount: (state, action) => {
            state.pageCount = action.payload.pageCount;
        },
        setEquipment: (state, action) => {
            state.equipment = action.payload.equipment;
        },
    }
})

export const { 
    setMode,
    setLogin, 
    setLogout, 
    setCharacters, 
    setCharName, 
    setCreateCharacterPageCount, 
    setBackground, 
    setCharClass,
    setDexterity,
    setIntelligence,
    setRace,
    setStrength,
    setTraits,
    setEquipment,
  } = authSlice.actions;
export default authSlice.reducer;