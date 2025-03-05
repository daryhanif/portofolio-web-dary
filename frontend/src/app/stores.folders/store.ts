import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../../features/menu.slicers/menu.slicer"

export const store = configureStore({
    reducer:{
        menuNavbar: menuReducer
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;