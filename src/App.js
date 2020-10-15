import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import store from './redux/store';

import MainLayout from './components/layout/MainLayout/MainLayout'

import ProductList from './components/features/ProductList/ProductListContainer';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <MainLayout>
          <Switch>
            <Route path='/products/:filter' component={ProductList}></Route>
            <Route path='/bestsellers'><h1>Bestsellers</h1></Route>
            <Route path='/promo'><h1>Promo</h1></Route>
            <Route path='/'><h1>Home</h1></Route>
          </Switch>
        </MainLayout>
      </Provider>
    </Router>
  );
}

export default App;
