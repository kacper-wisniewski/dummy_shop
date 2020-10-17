import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FeaturedProducts from '../../features/FeaturedProducts/FeaturedProducts';

import styles from './Special.module.scss';

const Special = ({ promo, bestsellers, newStuff }) => {
  return (
    <div className={styles.component}>
      <Container>
        {promo.length > 0 ? 
          <>
            <Row>
              <Col>
                <h2>The biggest discounts only with us</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <FeaturedProducts products={promo} />
              </Col>
            </Row>
          </> :
          <></>
        }
        {bestsellers.length > 0 ? 
          <>
            <Row>
              <Col>
              <h2>Check out our bestsellers</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <FeaturedProducts products={bestsellers} />
              </Col>
            </Row>
          </> :
          <></>
        }
        {newStuff.length > 0 ?
          <>
            <Row>
              <Col>
                <h2>Have You seen our new stuff?</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <FeaturedProducts products={newStuff} />
              </Col>
            </Row>
          </> :
          <></>
        }
      </Container>
    </div>
  );
}

export default Special;