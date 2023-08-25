import { configureStore } from "@reduxjs/toolkit";
import vanSlice from "./Slices/vanSlice";
export const store = configureStore({
    reducer:{
        van: vanSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
