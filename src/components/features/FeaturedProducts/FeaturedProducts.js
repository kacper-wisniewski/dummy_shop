import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './FeaturedProducts.module.scss';

class FeaturedProducts extends React.Component {
  state = {
    index: 0,
  }
  
  handleSelect (selectedIndex) {
    this.setState({index: selectedIndex});
  }

  render () {
    const { products } = this.props;
    const { index } = this.state;
    
    return (
      <Carousel activeIndex={index} onSelect={() => this.handleSelect()}>
        {products.map(elem => (
          <Carousel.Item key={elem.id}>
            <img
              className={`d-block w-100 ${styles.image}`}
              src={elem.image}
              alt={elem.alt}
            />
            <div className={styles.filter}></div>
            <Carousel.Caption>
              <h3>{ elem.name }</h3>
              { elem.isPromo ? <p>{ elem.promo }% off</p> : <></> }
              <Link to={`products/view/${elem.id}`}><Button variant='warning' size="sm">Show more</Button></Link>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    )
  }
}

export default FeaturedProducts;