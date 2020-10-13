import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import ProductList from './components/features/ProductList/ProductListContainer';
import Header from './components/layout/Header/HeaderContainer';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ProductList />
    </Provider>
  );
}

export default App;
