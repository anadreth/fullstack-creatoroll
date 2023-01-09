import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    token: null,
    characters: [],
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
    }
})

export const { setMode, setLogin, setLogout, setCharacters } = authSlice.actions;
export default authSlice.reducer;