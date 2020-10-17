import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import styles from './Product.module.scss';

const Product = ({ product, opinions, addToCart }) => {
  return (
    <div className={styles.component}>
      <Container>
        <Row xs={1} md={2}>
          <Col>
            <img className={styles.image} src={product.image} alt={`${product.id}: ${product.name}`} />
          </Col>
          <Col>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div><b>${product.isPromo? Math.ceil(product.price - Math.floor(product.price * product.promo / 100))  : product.price }</b>{product.isPromo ? <sup><s>${product.price}</s></sup> : <></> }</div>
            <Button variant='success' onClick={() => addToCart(product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</Button>
          </Col>
        </Row>
        <Row>
          <Col><h2>User's opinions</h2></Col>
        </Row>
        {opinions.length > 0 ?
          <Row>
            <Col xs={12}>
              {opinions.map(elem => (
                <div className={styles.opinion} key={elem.id}>
                  <h3>{ elem.user }</h3>
                  <p>{ elem.text }</p>
                </div>
              ))}
            </Col>
          </Row> :
          <h3>Ooops... that product doesn't have any opinions</h3>
        }
      </Container>
    </div>
  );
}

export default Product;