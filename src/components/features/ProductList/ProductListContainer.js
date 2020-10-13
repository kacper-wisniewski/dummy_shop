import { connect } from 'react-redux';

import ProductList from './ProductList';

const mapStateToProps = (state) => ({
  products: state.products,
  count: state.products.length,
})

export default connect(mapStateToProps)(ProductList);

