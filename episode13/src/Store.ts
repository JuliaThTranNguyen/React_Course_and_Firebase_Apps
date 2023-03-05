import {configureStore, createSlice} from "@reduxjs/toolkit";

const initialState = {value: {username: ""}};
const userSclice = createSlice ({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },

        logout: (state) => {
            state.value = initialState.value;
        },
    },
});

export const {login, logout} = userSclice.actions;

export const Store = configureStore({
    reducer: {
        user: userSclice.reducer,

    }

});