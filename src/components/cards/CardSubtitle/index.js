import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

export default class CardSubtitle extends Component {

  render() {
    return (
      <h2>
        {this.props.text}
      </h2>
    );
  }
}

CardSubtitle.propTypes = {
  text: PropTypes.string,
};
