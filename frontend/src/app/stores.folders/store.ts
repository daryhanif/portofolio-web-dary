import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../../features/menu.slicers/menu.slicer"
import imgContainerReducer from "../../features/imgContainer.slicers/imgContainer.slicer"
export const store = configureStore({
    reducer:{
        menuNavbar: menuReducer,
        imgContainer: imgContainerReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;