import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'react-bootstrap';

import styles from './ProductList.module.scss';

import ProductCard from '../../common/ProductCard/ProductCard';

class ProductList extends React.Component{
  
  state = {
    currentPage: 0,
    productsOnPage: 9,
    dots: [],
  };
  
  componentWillMount () {
    const { count } = this.props;
    const { productsOnPage, dots } = this.state;
    for (let i = 0; i * productsOnPage <= count; i++) {
      dots.push({id: i, name: `${i}`});
    };
    console.log(dots);
  }

  handleNextPage = () => {
    const { count } = this.props;
    if((this.state.currentPage + 1) * this.state.productsOnPage <= count) {
      this.setState({ currentPage: this.state.currentPage + 1 });
    }
  };

  handlePreviousPage = () => {
    if(this.state.currentPage > 0) {
      this.setState({ currentPage: this.state.currentPage - 1});
    }
  };

  handleChangePage = (id) => {
    console.log(id);
    this.setState({ currentPage: id });
  }


  render() {
    const { products } = this.props;
    const { currentPage, productsOnPage, dots } = this.state;

    return (
      <Container className={styles.component}>
        <Row xs={1}>
          <Col>
            <ul className={styles.listNavigation}>
              {dots.map(elem => (
                <>
                {currentPage === elem.id ? <li key={elem.id} className={styles.dotActive} onClick={() => this.handleChangePage(elem.id)}></li> : <li key={elem.id} className={styles.dot} onClick={() => this.handleChangePage(elem.id)}></li>}
                </>
              ))}
            </ul>
          </Col>
        </Row>
        <Row xs={1} md={2} lg={3}>
          {products.slice(currentPage * productsOnPage, (currentPage + 1) * productsOnPage).map(elem => (
            <Col key={elem.id}>
              <ProductCard {...elem} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  count: PropTypes.number,
}

export default ProductList;