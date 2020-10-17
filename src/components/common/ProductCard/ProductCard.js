import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartBroken, faHeart, faShoppingCart, faEye } from '@fortawesome/free-solid-svg-icons'

import styles from './ProductCard.module.scss';
const ProductCard = ({ id, name, description, image, category, price, isRate, isNew, isPromo, promo, comprasion, likes, dislikes, addToCart, addRate, removeRate }) => {
  
  return (
    <div className={styles.component}>
      <span className={styles.tag}>{category}<br/>{ category }</span>
      {isPromo ? <span className={styles.promoTag}>{promo}% off</span> : <></>}
      {isNew ? <span className={styles.newTag}>NEW</span> : <></>}
      <img src={ image } alt={ name } />
      <h3>{ name }</h3>
      <span className={styles.price}><b>${isPromo? (price - price * promo / 100)  : price }</b>{isPromo ? <sup><s>${price}</s></sup> : <></> }</span>
      <div className={styles.buttons}>
        <div className={styles.opinions}>
          {isRate ? 
            <>
              <span className={isRate === 'like' ? styles.rated : styles.rate} onClick={() => removeRate(id, name, description, image, category, price, isRate, isNew, isPromo, promo, comprasion, likes, dislikes)}>
                <FontAwesomeIcon icon={faHeart} /> {likes}
              </span>
              <span className={isRate === 'dislike' ? styles.rated : styles.rate} onClick={() => removeRate(id, name, description, image, category, price, isRate, isNew, isPromo, promo, comprasion, likes, dislikes)}>
                <FontAwesomeIcon icon={faHeartBroken} /> {dislikes}
              </span>
            </>
          :
            <>
              <span className={styles.rate} onClick={() => addRate(id, name, description, image, category, price, 'like', isNew, isPromo, promo, comprasion, likes, dislikes)}>
                <FontAwesomeIcon icon={faHeart} /> {likes}
              </span>
              <span className={styles.rate} onClick={() => addRate(id, name, description, image, category, price, 'dislike', isNew, isPromo, promo, comprasion, likes, dislikes)}><FontAwesomeIcon icon={faHeartBroken} /> {dislikes}</span>
            </>
          }
        </div>
        <div className={styles.opinions}>
          <Button variant='success' onClick={() => addToCart(id, name, image, category, price, isPromo, promo)}><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</Button>
          <Link to={`/products/view/${id}`}><Button variant='warning' className={styles.button}><FontAwesomeIcon icon={faEye} /> Show more</Button></Link>
        </div>
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
  isPromo: PropTypes.bool,
  promo: PropTypes.number,
  addToCart: PropTypes.func,
  addRate: PropTypes.func,
  removeRate: PropTypes.func,
};

export default ProductCard;