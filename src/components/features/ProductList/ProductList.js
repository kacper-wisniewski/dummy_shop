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
    currentFilter: this.props.match.params.filter,
  };

  componentWillReceiveProps() {
      const { currentFilter } = this.state;
      if(currentFilter !== this.props.match.params.filter) {
        this.setState({currentPage: 0, currentFilter: this.props.match.params.filter });
      }
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
    this.setState({ currentPage: id });
  }

  render() {
    const { products, addToCart, count, dots, category} = this.props;
    const { currentPage, productsOnPage } = this.state;
    return (
      <div className={styles.component}>
        <Container >
          <Row>
            <Col>
              <h2>{category.map(elem => (elem.name))}</h2>
            </Col>
          </Row>
          <Row xs={1}>
            {count > 0 ?
              <Col>
                <ul className={styles.listNavigation}>
                  <li onClick={() => this.handlePreviousPage()}><FontAwesomeIcon icon={faChevronLeft} /></li>
                  {dots.map(elem => (
                    <li key={elem.id} className={currentPage === elem.id ? styles.dotActive : styles.dot } onClick={() => this.handleChangePage(elem.id)}></li>
                  ))}
                  <li onClick={() => this.handleNextPage()}><FontAwesomeIcon icon={faChevronRight} /></li>
                </ul>
              </Col> :
              <></>
            }
          </Row>
          <Row xs={1} md={2} lg={3}>
            {count > 0 ? 
            <>
              {products.slice(currentPage * productsOnPage, (currentPage + 1) * productsOnPage).map(elem => (
                <Col key={elem.id}>
                  <ProductCard {...elem} addToCart={addToCart} />
                </Col>
              ))}
            </> :
            <Col>
              <h2>We have no products in that category</h2>
            </Col>
            }
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
  initialPage: PropTypes.number,
}

export default ProductList;