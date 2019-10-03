import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import publications from '../initialData/publications.json';
import Reader from '../components/Reader/Reader';

export default class ReaderPage extends Component {
  state = {
    publicationIndex: null,
  };

  componentDidMount() {
    const { history, location } = this.props;

    const parseQueryStr = queryString.parse(location.search).item;
    if (!parseQueryStr) {
      return history.replace({
        pathname: '/reader',
        search: 'item=1',
      });
    }

    return this.setState({
      publicationIndex: parseQueryStr - 1,
    });
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    const prevItemIndex = queryString.parse(prevProps.location.search).item;
    const nextItemIndex = queryString.parse(location.search).item;

    if (prevItemIndex !== nextItemIndex) {
      this.updatePublicationIndex(nextItemIndex);
    }
  }

  updatePublicationIndex = nextItemIndex => {
    this.setState({
      publicationIndex: nextItemIndex - 1,
    });
  };

  handleControlPublication = event => {
    const { history, location } = this.props;
    const parseQueryStr = queryString.parse(location.search).item;

    if (event.target.name === 'prevPage') {
      history.push({
        pathname: '/reader',
        search: `item=${Number(parseQueryStr) - 1}`,
      });
    } else {
      history.push({
        pathname: '/reader',
        search: `item=${Number(parseQueryStr) + 1}`,
      });
    }
  };

  render() {
    const { publicationIndex } = this.state;

    if (publicationIndex !== null) {
      return (
        <Reader
          publication={publications[publicationIndex]}
          onControlPublication={this.handleControlPublication}
          index={publicationIndex}
          allPublicationLength={publications.length}
        />
      );
    }

    return null;
  }
}

ReaderPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};
