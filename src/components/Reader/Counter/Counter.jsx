import React from 'react';
import PropTypes from 'prop-types';
import styles from './counter.module.css';

const Counter = ({ index, sum }) => {
  return <p className={styles.counter}>{`${Number(index) + 1}/${sum}`}</p>;
};

Counter.propTypes = {
  index: PropTypes.number.isRequired,
  sum: PropTypes.number.isRequired,
};

export default Counter;
