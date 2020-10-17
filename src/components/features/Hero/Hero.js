import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';

import styles from './Hero.module.scss';

class Hero extends React.Component {
  state = {
    index: 0,
  }

  handleSelect (selectedIndex) {
    this.setState({index: selectedIndex});
  }

  render() {
    const { banners } = this.props;
    const { index } = this.state;

    return(
      <Carousel activeIndex={index} onSelect={() => this.handleSelect()}>
        {banners.map(elem => (
          <Carousel.Item key={elem.id}>
            <img
              className={`d-block w-100 ${styles.banner}`}
              src={elem.image}
              alt={elem.alt}
            />
            <div className={styles.filter}></div>
            <Carousel.Caption>
              <h3>{ elem.title }</h3>
              <p>{ elem.description }</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

Hero.propTypes = {
  banners: PropTypes.arrayOf(PropTypes.object),
};

export default Hero;