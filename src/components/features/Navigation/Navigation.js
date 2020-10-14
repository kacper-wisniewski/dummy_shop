import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

import styles from './Navigation.module.scss';

const Navigation = ({ categories }) => {
  return (
    <Navbar>
      <Nav>
        <NavLink className={styles.navElement} to='/'>Home</NavLink>
        <NavLink className={styles.navElement} to='/bestsellers'>Bestsellers</NavLink>
        <NavLink className={styles.navElement} to='/promo'>Promo</NavLink>
        <NavDropdown className={styles.navElement} title='Products' size={'sm'}>
          {categories.map(elem => (
            <li className={styles.dropdownElement}  key={elem.id}><NavLink className={styles.dropdownElement} to={`/products/${elem.id}`}>{elem.name}</NavLink></li>
          ))}
          <li className={styles.dropdownElement}><NavLink className={styles.dropdownElement} to='/products/all'>All</NavLink></li>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}

Navigation.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object)
}

export default Navigation;