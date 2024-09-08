import { combineReducers } from "redux";
import authReducer from "./AuthReducers.js";
import postReducer from "./PostReducers.js";
import userReducer from "./UserReducer.js";

const reducers = combineReducers({
  auth: authReducer,
  Post:postReducer,
  user:userReducer
});

export default reducers;
