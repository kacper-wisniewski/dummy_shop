import { connect } from 'react-redux';

import Cart from './Cart';
import { getCart, removeProduct } from '../../../redux/cartRedux';

const mapStateToProps = (state) => ({
  cart: getCart(state),
})
const mapDispatchToProps = dispatch => ({
  removeFromCart: (product) => dispatch(removeProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
