import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, } from 'react-bootstrap';

import styles from './Header.module.scss';

import Cart from '../../features/Cart/CartContainer'
import Navigation from '../../features/Navigation/Navigation';
import Hero from '../../features/Hero/Hero';

class Header extends React.Component {
  render() {
    const { categories, banners } = this.props;
    return (
      <header className={styles.component}>
        <Container>
          <Row className={styles.row}>
            <span className={styles.brand}><h1>Dummy Store</h1></span>
            <Navigation categories={categories} />
            <Cart />
          </Row>
        </Container>
        <Hero banners={banners} />
      </header>
    );
  }
};

Header.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  banners:PropTypes.arrayOf(PropTypes.object),
};

export default Header;