import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cl from 'classname';

import Button from '_components/Button';
import CARDS from '_data/cardsType';

import style from '../style.styl';

export default class Controls extends Component {
  render() {
    const {
      onTogglePlay, onClickNext, onClickPrevious,
      isPlaying, cardType,
    } = this.props;

    const {
      controlsRow, buttonPrevious, buttonNext,
      flexEnd,
    } = style;

    let controlsRowStyles = controlsRow;
    let isPrevNeeded = true;

    switch (cardType) {
      case CARDS.radio:
      case CARDS.personal:
        isPrevNeeded = false;
        controlsRowStyles = cl(controlsRow, flexEnd);
        break;
      case CARDS.single:
        isPrevNeeded = false;
        break;
      default:
        break;
    }

    return (
      <div className={controlsRowStyles}>
        { isPrevNeeded && <Button style={buttonPrevious} onClick={onClickPrevious} /> }
        <Button
          style={
            cl(
              style.playerButton,
              isPlaying ? style.playerButtonPause : style.playerButtonPlay,
            )
          }
          isPlaying={isPlaying}
          onClick={onTogglePlay}
        />
        { cardType !== CARDS.single && <Button style={buttonNext} onClick={onClickNext} /> }
      </div>
    );
  }
}

Controls.propTypes = {
  onTogglePlay: PropTypes.func,
  onClickPrevious: PropTypes.func,
  onClickNext: PropTypes.func,
  isPlaying: PropTypes.bool,
  cardType: PropTypes.number,
};
