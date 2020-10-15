import { connect } from 'react-redux';

import ProductList from './ProductList';
import { addProduct } from '../../../redux/cartRedux';
import { getFiltred, getFiltredCount } from '../../../redux/productsRedux';

const getDots = (products) => {
  const dots = [];
  for (let i = 0; i * 12 < products.length ; i++) {
    dots.push({id: i, name: `${i}`});
  };
  return dots
}

const mapStateToProps = (state, props) => ({
  products: getFiltred(state, props.match.params.filter),
  count: getFiltredCount(state, props.match.params.filter),
  dots: getDots(getFiltred(state, props.match.params.filter)),
  category: state.categories.filter(elem => {
    if (elem.id === props.match.params.filter) {
      return `${elem.name}`;
    }
  }),
})

const mapDispatchToProps = dispatch => ({
  addToCart: ( id, name, image, category, price ) => dispatch(addProduct({id, name, image, category, price}))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

