import { connect } from 'react-redux';

import Product from './Product';

import { getProductById } from '../../../redux/productsRedux';
import { getOpinionsById } from '../../../redux/opinionsRedux';
import { addProduct } from '../../../redux/cartRedux';

const mapStateToProps = (state, props) => ({
  product: getProductById(state, props.match.params.id),
  opinions: getOpinionsById(state, props.match.params.id),
})

const mapDispatchToProps = (dispatch) => ({
  addToCart: ( {id, name, image, category, price} ) => dispatch(addProduct({id, name, image, category, price})),
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);