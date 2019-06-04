import { combineReducers } from "redux-immutable";
// import { createSelector } from "reselect";
// import Immutable from "immutable";

import app from './app'
import chat from './chat'
import auth from "./auth";


const rootReducer = combineReducers({
  app,
  chat,
  auth,
});

export default rootReducer;

