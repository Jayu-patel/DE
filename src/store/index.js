import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "./slices/locationSlice";
import userSlice from "./slices/user"

const store = configureStore({
    reducer:{
        location: locationSlice,
        user: userSlice,
    }
})

export default store