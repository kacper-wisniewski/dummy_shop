import { connect } from 'react-redux';

import ProductList from './ProductList';
import { addProduct } from '../../../redux/cartRedux';
import { getFiltred, getFiltredCount, removeRate, addRate } from '../../../redux/productsRedux';

const getDots = (products) => {
  const dots = [];
  for (let i = 0; i * 12 < products.length ; i++) {
    dots.push({id: i, name: `${i}`});
  };
  return dots
}

const getCategory = (categories, filter) => {
  return (categories.filter(elem => {
    if (elem.id === filter) {
      return `${elem.name}`;
    }
  }));
};

const mapStateToProps = (state, props) => ({
  products: getFiltred(state, props.match.params.filter),
  count: getFiltredCount(state, props.match.params.filter),
  dots: getDots(getFiltred(state, props.match.params.filter)),
  category: getCategory(state.categories, props.match.params.filter),
})

const mapDispatchToProps = dispatch => ({
  addToCart: ( id, name, image, category, price, isPromo, promo ) => dispatch(addProduct({id, name, image, category, price, isPromo, promo})),
  removeRate: ( id, name, description, image, category, price, isRate, isNew, isPromo, promo, comprasion, likes, dislikes ) => dispatch(removeRate({id, name, description, image, category, price, isRate, isNew, isPromo, promo, comprasion, likes, dislikes})),
  addRate: ( id, name, description, image, category, price, isRate, isNew, isPromo, promo, comprasion, likes, dislikes ) => dispatch(addRate({id, name, description, image, category, price, isRate, isNew, isPromo, promo, comprasion, likes, dislikes})),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

