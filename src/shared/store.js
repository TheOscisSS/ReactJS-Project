import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";
import { getFirestore } from "redux-firestore";

import rootReducer from "./reducers";

export default createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
);
