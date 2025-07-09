import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name : "appSlice",
    initialState : {
        isSidebarOpen : true
    },
    reducers : {
        toggleSideBar : (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        closeSideBar : (state) => {
            state.isSidebarOpen = false;
        }
    }
})
export const {toggleSideBar, closeSideBar} = appSlice.actions;
export default appSlice.reducer;
