import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// combination of all reducers in application
import rootReducer from "./reducers";
// testing state on chrome browser. Install redux devtools extension on chrome
import { composeWithDevTools } from "redux-devtools-extension";
const initialState = {};

// to add more then 1 middleware
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
