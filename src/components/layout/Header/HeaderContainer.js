import { connect } from 'react-redux';
import { getAll } from '../../../redux/categoriesRedux';

import Header from './Header';

const mapStateToProps = (state) => ({
  categories: getAll(state),
  banners: state.banners,
})

export default connect(mapStateToProps)(Header);