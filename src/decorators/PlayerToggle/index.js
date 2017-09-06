import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Hammer from 'hammerjs';

import style from './style.styl';

export default class PlayerToggle extends Component {
  state = {
    currentPlayer: 'mini',
    slideTransform: 0,
  };

  componentDidMount() {
    this._initToggle();
  }

  _initToggle() {
    this.hammerMiniPlayer = Hammer(ReactDOM.findDOMNode(this.refs['item-0']));
    this.hammerFullPlayer = Hammer(ReactDOM.findDOMNode(this.refs['item-1']));

    this.hammerFullPlayer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

    this.hammerMiniPlayer.on('tap', this._toFullPlayer);
    this.hammerFullPlayer.on('swipedown', this._toMiniPlayer);
  }

  _toFullPlayer = () => {
    this.setState({
      currentPlayer: 'full',
      slideTransform: -window.innerHeight,
    });
  }

  _toMiniPlayer = () => {
    this.setState({
      currentPlayer: 'mini',
      slideTransform: 0,
    });
  }

  _slide() {
    return {
      transform: `translateY(${this.state.slideTransform}px)`,
    };
  }

  render() {
    return (
      <div
        className={style.container}
        style={this._slide()}
      >
        {
          this.props.children.map((child, iter) =>
            React.cloneElement(child, {
              ref: `item-${iter}`,
              key: child.props.key,
            },
            ))
        }
      </div>
    );
  }
}

PlayerToggle.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};