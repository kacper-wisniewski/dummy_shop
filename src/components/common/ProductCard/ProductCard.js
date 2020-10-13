import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartBroken, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import styles from './ProductCard.module.scss';

const ProductCard = ({name, image, price, category, likes, dislikes}) => {
  return (
    <div className={styles.component}>
      <span className={styles.tag}>{category}<br/>{ category }</span>
      <img src={ image } alt={ name } />
      <h3>{ name }</h3>
      <span className={styles.price}><b>${ price }</b></span>
      <div className={styles.buttons}>
        <div className={styles.opinions}>
          <span className={styles.rate}><FontAwesomeIcon icon={faHeart} /> {likes}</span>
          <span className={styles.rate}><FontAwesomeIcon icon={faHeartBroken} /> {dislikes}</span>
        </div>
        <Button variant='success'><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</Button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  likes: PropTypes.number,
  dislikes: PropTypes.number,
};

export default ProductCard;