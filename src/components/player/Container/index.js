import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '_components/Button';
import CircularAvatar from '_components/CircularAvatar';
import cl from 'classname';

import style from './style.scss';

export default class Container extends Component {
  _handleClickArrowDown = () => {
    console.log('ArrowDown');
  }

  _handleClickDownload = () => {
    console.log('Download');
  }

  _handleClickPrevious = () => {
    console.log('Previous');
  }

  _handleClickPlay= () => {
    console.log('Play');
  }

  _handleClickNext = () => {
    console.log('Next');
  }

  _handleClickDislike= () => {
    console.log('Dislike');
  }

  _handleClickLike = () => {
    console.log('Like');
  }

  _handleClickPlus= () => {
    console.log('Plus');
  }

  _handleClickRepeat = () => {
    console.log('Repeat');
  }

  render() {
    const {
      trackName, singerName, isPlaying,
      onTogglePlay, trackPercentage, minutesLeft,
      secondsLeft, cover,
    } = this.props;
    return (
      <div className={style.wrapper}>
        <div className={style.headerRow}>
          <Button style={style.buttonArrowDown} onClick={this._handleClickArrowDown} />
          <div className={style.moodIcons} />
          <Button style={style.buttonDownload} onClick={this._handleClickDownload} />
        </div>
        <div>
          <div className={style.vote}>
            <Button style={style.buttonDislike} onClick={this._handleClickDislike} />
            <div className={style.spacer} />
            <Button style={style.buttonLike} onClick={this._handleClickLike} />
          </div>
          <CircularAvatar
            image={cover}
            progress={trackPercentage}
            radius={0.18}
            time={`${minutesLeft}:${secondsLeft}`}
          />
        </div>
        <div className={style.titleRow}>
          <div className={style.songName}>
            {trackName}
          </div>
          <div className={style.artistName}>
            {singerName}
          </div>
        </div>
        <div className={style.controlsRow}>
          <Button style={style.buttonPrevious} onClick={this._handleClickPrevious} />
          <Button
            style={
              cl(
                style['player-button'],
                isPlaying ? style['player-button--pause'] : style['player-button--play'],
              )
            }
            isPlaying={isPlaying}
            onClick={onTogglePlay}
          />
          <Button style={style.buttonNext} onClick={this._handleClickNext} />
        </div>
        <div className={style.bottomRow}>
          <Button style={style.buttonPlus} onClick={this._handleClickPlus} />
          <Button style={style.buttonRepeat} onClick={this._handleClickRepeat} />
        </div>
      </div>
    );
  }
}

Container.propTypes = {
  trackName: React.PropTypes.string,
  singerName: React.PropTypes.string,
  trackPercentage: React.PropTypes.number,
  minutesLeft: React.PropTypes.string,
  secondsLeft: React.PropTypes.string,
  cover: React.PropTypes.string,
  isPlaying: PropTypes.bool,
  onTogglePlay: PropTypes.func,
};