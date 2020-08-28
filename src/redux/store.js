// Package Related Imports
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// File Imports
import rootReducer from './rootReducer';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

export default store;