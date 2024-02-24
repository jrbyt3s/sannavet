
import thunk from "redux-thunk";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

const store = configureStore( {reducer:reducer}, applyMiddleware(thunk));

export default store;
