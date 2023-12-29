import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import RouteSwitch from "./RouteSwitch";

import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import customUserReducer from "./reducers/customUserReducer";
import postsReducer from "./reducers/postsReducer";
import commentsReducer from "./reducers/commentsReducer";

const store = configureStore({
  reducer: {
    customUser: customUserReducer,
    posts: postsReducer,
    comments: commentsReducer
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouteSwitch />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
