import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { loadUser, reducer as oidcReducer } from "redux-oidc";
import userManager from "./userManager";
// import reducers from 'main/reducers'
import MainReducer from './components/MainReducer'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

export default function configureStore(history, initialState) {
  const reducers = {
    main: MainReducer,
    oidc: oidcReducer
  };

  const middleware = [thunk, multi, promise, routerMiddleware(history)];

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === "development";
  if (
    isDevelopment &&
    typeof window !== "undefined" &&
    window.devToolsExtension
  ) {
    enhancers.push(window.devToolsExtension());
  }

  const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
  });

  // const store = applyMiddleware(thunk, multi, promise, routerMiddleware(history))(createStore)(rootReducer,enhancers)

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );
  
  loadUser(store, userManager);

  return store;
}