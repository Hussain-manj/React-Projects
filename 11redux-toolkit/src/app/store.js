import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoslice"; // Adjust the import path as necessary

export const store = configureStore({
    reducer :  {
        todos : todoReducer
    } 
})