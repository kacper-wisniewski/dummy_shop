import { connect } from 'react-redux';

import Special from './Special';

import { getPromo, getBestsellers, getNew } from '../../../redux/productsRedux';

const mapStateToProps = (state) => ({
  promo: getPromo(state),
  bestsellers: getBestsellers(state),
  newStuff: getNew(state),
})

export default connect(mapStateToProps)(Special);