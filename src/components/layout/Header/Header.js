import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, } from 'react-bootstrap';

import styles from './Header.module.scss';

import Cart from '../../features/Cart/CartContainer'
class Header extends React.Component {

  render() {
    const { categories } = this.props;
    return (
      <header className={styles.component}>
        <Container>
          <Row className={styles.row}>
            <span className={styles.brand}><h1>Dummy Store</h1></span>
            <Cart />
          </Row>
        </Container>
      </header>
    );
  }
};

Header.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};

export default Header;