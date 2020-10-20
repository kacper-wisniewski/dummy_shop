import { combineReducers, createStore } from 'redux';
import initialState from './initialState';

import productsReducer from  './productsRedux';
import cartReducer from './cartRedux';
import categoriesReducer from './categoriesRedux';
import opinionsReducer from './opinionsRedux';

const reducers = {
  products: productsReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  opinions: opinionsReducer,
};

Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;