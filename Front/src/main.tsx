import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/rootReducer.ts";

const store = createStore(rootReducer);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
