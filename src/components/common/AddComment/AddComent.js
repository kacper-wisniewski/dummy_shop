import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import styles from './AddComment.module.scss';

class AddComment extends React.Component {
  state = {
    valueName: '',
    valueComment: '',
    visibleSubmit: false,
  }

  handleChangeName = event => {
    this.setState({
      valueName: event.target.value,
      visibleSubmit: (event.target.value.length > 0 && this.state.valueComment.length > 0)
    });
  }

  handleChangeComment = event => {
    this.setState({
      valueComment: event.target.value,
      visibleSubmit: (event.target.value.length > 0 && this.state.valueName.length > 0),
    })
  }

  render() {
    const { valueName, valueComment, visibleSubmit } = this.state;
    const { productId, add } = this.props;
    return (
      <div className={styles.component}>
        <form className={styles.form}>
          <label className={styles.label}>
            <span className={styles.tag}>Name: </span>
            <input className={styles.input} type='text' value={valueName} placeholder='Enter Your name'  onChange={this.handleChangeName} />
          </label>
          <label className={styles.label}>
            <span className={styles.tag}>Comment: </span>
            <textarea className={styles.input} value={valueComment} placeholder='Enter Your opinion' rows='3' onChange={this.handleChangeComment} />
          </label>
          {visibleSubmit ? <Button variant='outline-success' onClick={() => {add(productId, valueName, valueComment); this.setState({valueName: '', valueComment: ''})}}>Submit</Button> : <></>}
        </form>
      </div>
    )
  }
}

AddComment.propTypes = {
  add: PropTypes.func
}
export default AddComment;