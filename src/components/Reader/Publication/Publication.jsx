import React from 'react';
import PropTypes from 'prop-types';
import styles from './publication.module.css';

const Publication = ({ item: { title, text } }) => {
  return (
    <article className={styles.publication}>
      <h2 className={styles.header}>{title}</h2>
      <p className={styles.content}>{text}</p>
    </article>
  );
};

Publication.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
