import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";

import authReducer from "./authReducer";
import userReducer from "./userReducer";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  firebase: firebaseReducer
});
