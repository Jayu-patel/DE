import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "./slices/locationSlice";

const store = configureStore({
    reducer:{
        location: locationSlice
    }
})

export default store