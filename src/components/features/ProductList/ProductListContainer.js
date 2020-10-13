import { connect } from 'react-redux';

import ProductList from './ProductList';
import { addProduct } from '../../../redux/cartRedux';

const mapStateToProps = (state) => ({
  products: state.products,
  count: state.products.length,
})

const mapDispatchToProps = dispatch => ({
  addToCart: ( id, name, image, category, price ) => dispatch(addProduct({id, name, image, category, price}))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

