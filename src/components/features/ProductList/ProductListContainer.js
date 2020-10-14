import { connect } from 'react-redux';

import ProductList from './ProductList';
import { addProduct } from '../../../redux/cartRedux';
import { getFiltred, getFiltredCount } from '../../../redux/productsRedux';

const mapStateToProps = (state, props) => ({
  products: getFiltred(state, props.match.params.filter),
  count: getFiltredCount(state, props.match.params.filter),
})

const mapDispatchToProps = dispatch => ({
  addToCart: ( id, name, image, category, price ) => dispatch(addProduct({id, name, image, category, price}))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

