import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import session from "./session";
import photoReducer from "./photo";
import commentReducer from './comment';
import tagReducer from './tag';
import albumReducer from "./album";
import profileReducer from "./user-profile";

const rootReducer = combineReducers({
  session,
  photoReducer: photoReducer,
  commentReducer: commentReducer,
  tagReducer: tagReducer,
  albumReducer: albumReducer,
  userProfile: profileReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
