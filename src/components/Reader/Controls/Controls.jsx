import React from 'react';
// import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './controls.module.css';

const Controls = ({
  onControlPublication,
  index,
  sum,
  prevDisabled,
  nextDisabled,
}) => (
  <section className={styles.controls}>
    <button
      type="button"
      className={index === 0 ? styles.disabled : styles.active}
      disabled={prevDisabled}
      onClick={onControlPublication}
      name="prevPage"
    >
      Назад
    </button>
    <button
      type="button"
      className={sum - 1 === index ? styles.disabled : styles.active}
      onClick={onControlPublication}
      disabled={nextDisabled}
      name="nextPage"
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  onControlPublication: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  sum: PropTypes.number.isRequired,
  prevDisabled: PropTypes.bool.isRequired,
  nextDisabled: PropTypes.bool.isRequired,
};

export default Controls;
