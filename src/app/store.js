import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/shopingSlice"

export const store = configureStore({
    reducer: {
        counter:counterReducer,
    }
})