import { createSlice } from "@reduxjs/toolkit";

const initialSidebarState: { activeSidebarComponent: string } = {
  activeSidebarComponent: "PointsSummary",
};

const initialNavBarState: { isNavbarOpen: boolean } = {
  isNavbarOpen: false,
};

const viewSlice = createSlice({
  name: "SidebarComponent",
  initialState: initialSidebarState,
  reducers: {
    setActiveComponent: (state, action) => {
      state.activeSidebarComponent = action.payload;
    },
  },
});

const navBarSlice = createSlice({
  name: "navBar",
  initialState: initialNavBarState,
  reducers: {
    setNavBar: (state, action) => {
      state.isNavbarOpen = action.payload;
    },
  },
});

export const { setActiveComponent } = viewSlice.actions;
export const { setNavBar } = navBarSlice.actions;

export default viewSlice.reducer;
export const navBarReducer = navBarSlice.reducer;
