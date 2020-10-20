import { connect } from 'react-redux';

import Product from './Product';

import { getProductById } from '../../../redux/productsRedux';
import { getOpinionsById, addOpinions } from '../../../redux/opinionsRedux';
import { addProduct } from '../../../redux/cartRedux';

const mapStateToProps = (state, props) => ({
  product: getProductById(state, props.match.params.id),
  opinions: getOpinionsById(state, props.match.params.id).sort( (a, b) => a.id < b.id ? 1 : -1),
})


const mapDispatchToProps = dispatch => ({
  addToCart: ( {id, name, image, category, price} ) => dispatch(addProduct({id, name, image, category, price})),
  addOpinion: ( id, name, comment ) => dispatch(addOpinions({id, name, comment})),
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);