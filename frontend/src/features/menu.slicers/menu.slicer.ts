import { createSlice } from "@reduxjs/toolkit";
interface MenuToggle {
    isOpen: boolean;
}
const initialState: MenuToggle = {
    isOpen: false,
  };
const menuSlicer = createSlice({
     name : "toggleMenu",
     initialState,
     reducers:{
        toggle:(state) =>{
            state.isOpen = !state.isOpen
        }
     }
})

export const {toggle} = menuSlicer.actions;
export default menuSlicer.reducer;