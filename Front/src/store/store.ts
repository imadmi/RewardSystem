import { configureStore } from "@reduxjs/toolkit";
import viewSlice from "./reducers/rootReducer";
import { navBarReducer } from "./reducers/rootReducer";

const store = configureStore({
  reducer: {
    SidebarComponent: viewSlice,
    navBar: navBarReducer,
  },
});

export default store;
