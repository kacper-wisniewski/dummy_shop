import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/HeaderContainer';

class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        { children }
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node,
}

export default MainLayout;