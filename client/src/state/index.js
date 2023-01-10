import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    token: null,
    characters: [],
    pageCount: 1,
    charName: null,
    race: null,
    charClass:null,
    strength: null,
    dexterity: null,
    intelligence: null,
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
        setNewCharacter: (state, action) => {
            state.charName = action.payload.charName;
            state.race = action.payload.race;
            state.charClass = action.payload.charClass;
            state.strength = action.payload.strength;
            state.dexterity = action.payload.dexterity;
            state.intelligence = action.payload.intelligence;
            state.background = action.payload.background;
            state.traits = action.payload.traits;
        },
        setCreateCharacterPageCount: (state, action) => {
            state.pageCount = action.payload.pageCount;
        }
    }
})

export const { setMode, setLogin, setLogout, setCharacters, setNewCharacter, setCreateCharacterPageCount  } = authSlice.actions;
export default authSlice.reducer;