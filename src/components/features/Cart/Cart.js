import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';

class Cart extends React.Component {
  state = {
    open: false,
  }

  handleCartViewChange = () => {
    this.setState({ open: !this.state.open})
  };

  render() {
    const { cart, removeFromCart } = this.props;
    const { open } = this.state;
    return (
      <div className={styles.component}>
        <div onClick={() => this.handleCartViewChange()}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <sup> {cart.length}</sup>
        </div>
        {open? 
          <div className={styles.cartView}>
            {cart.map(elem => (
              <div className={styles.cartProduct} key={elem.id}>
                <img src={elem.image} alt={elem.name}></img>
                <div className={styles.cartDescription}>
                  <h3>{ elem.name } <sup>id: { elem.id }</sup></h3>
                  <span></span><b>${ elem.price }</b>
                  <span>{ elem.category }</span> 
                </div>
                <div className={styles.buttons}>
                  <Button variant='danger' onClick={() => removeFromCart(elem)}><FontAwesomeIcon icon={faTimes} /></Button>
                </div>
              </div>
            ))}
          </div>
          :
          <></>
        }
      </div>
    );
  }
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
  removeFromCart: PropTypes.func,
};

export default Cart;