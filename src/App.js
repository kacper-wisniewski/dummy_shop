import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import ProductList from './components/features/ProductList/ProductListContainer';


function App() {
  return (
    <Provider store={store}>
      <ProductList />
    </Provider>
  );
}

export default App;
