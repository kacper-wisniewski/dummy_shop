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
import Special from './components/views/Special/SpecialContainer';
import Product from './components/views/Product/ProductContainer';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <MainLayout>
          <Switch>
            <Route path='/products/view/:id' component={Product}></Route>
            <Route path='/products/:filter' component={ProductList} />
            <Route path='/featured' component={Special} />
            <Route path='/'><h1>Home</h1></Route>
          </Switch>
        </MainLayout>
      </Provider>
    </Router>
  );
}

export default App;
