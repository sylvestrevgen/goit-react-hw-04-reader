import React from 'react';
import PropTypes from 'prop-types';
import styles from './reader.module.css';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';

const Reader = ({
  publication,
  onControlPublication,
  index,
  allPublicationLength,
}) => (
  <div className={styles.reader}>
    <Publication item={publication} />
    <Counter index={index} sum={allPublicationLength} />
    <Controls
      onControlPublication={onControlPublication}
      index={index}
      sum={allPublicationLength}
      prevDisabled={index === 0}
      nextDisabled={allPublicationLength - 1 === index}
    />
  </div>
);

Reader.propTypes = {
  publication: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  onControlPublication: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  allPublicationLength: PropTypes.number.isRequired,
};

export default Reader;
