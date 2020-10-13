import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col} from 'react-bootstrap';

import styles from './ProductList.module.scss';

import ProductCard from '../../common/ProductCard/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

class ProductList extends React.Component{
  
  state = {
    currentPage: 0,
    productsOnPage: 12,
    dots: [],
  };
  
  componentWillMount () {
    const { count } = this.props;
    const { productsOnPage, dots } = this.state;
    for (let i = 0; i * productsOnPage <= count; i++) {
      dots.push({id: i, name: `${i}`});
    };
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
    const { products, addToCart } = this.props;
    const { currentPage, productsOnPage, dots } = this.state;

    return (
      <div className={styles.component}>
        <Container >
          <Row xs={1}>
            <Col>
              <ul className={styles.listNavigation}>
                <li onClick={() => this.handlePreviousPage()}><FontAwesomeIcon icon={faChevronLeft} /></li>
                {dots.map(elem => (
                  <>
                  {currentPage === elem.id ? <li key={elem.id} className={styles.dotActive} onClick={() => this.handleChangePage(elem.id)}></li> : <li key={elem.id} className={styles.dot} onClick={() => this.handleChangePage(elem.id)}></li>}
                  </>
                ))}
                <li onClick={() => this.handleNextPage()}><FontAwesomeIcon icon={faChevronRight} /></li>
              </ul>
              
            </Col>
          </Row>
          <Row xs={1} md={2} lg={3}>
            {products.slice(currentPage * productsOnPage, (currentPage + 1) * productsOnPage).map(elem => (
              <Col key={elem.id}>
                <ProductCard {...elem} addToCart={addToCart} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  count: PropTypes.number,
  addToCart: PropTypes.func,
}

export default ProductList;