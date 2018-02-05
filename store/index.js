import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import app from './reducers';

export const initStore = (initialState = {}) => {
  return createStore(app, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};

