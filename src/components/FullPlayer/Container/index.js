import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '_components/Button';
import CircularAvatar from '_components/CircularAvatar';
import Background from '_components/FullPlayer/Background';
import cl from 'classname';

import style from './style.styl';

export default class Container extends Component {
  _handleClickArrowDown = () => {
    console.log('ArrowDown');
  }

  _handleClickDownload = () => {
    console.log('Download');
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

  render() {
    const {
<<<<<<< HEAD:src/components/FullPlayer/Container/index.js
      playerState: {
        trackName, singerName, isPlaying,
        trackPercentage, minutesLeft, secondsLeft,
        cover,
      },
    } = this.props.playerState;

    const onTogglePlay = this.props.onTogglePlay;

=======
      trackName, singerName, trackPercentage,
      minutesLeft, secondsLeft, cover,
      isPlaying, isRepeatMode,
      onTogglePlay, onClickPrevious,
      onClickNext, onClickRepeat,
    } = this.props;
>>>>>>> bb2b32bbc27cf0c217d5e20eea8f69789fcec1de:src/components/player/Container/index.js
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
          <Button style={style.buttonPrevious} onClick={onClickPrevious} />
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
          <Button style={style.buttonNext} onClick={onClickNext} />
        </div>
        <div className={style.bottomRow}>
          <Button style={style.buttonPlus} onClick={this._handleClickPlus} />
          <Button
            style={isRepeatMode ? style.buttonRepeatActive : style.buttonRepeatInactive}
            onClick={onClickRepeat}
          />
        </div>
        <Background
          cover={cover}
        />
      </div>
    );
  }
}

Container.propTypes = {
<<<<<<< HEAD:src/components/FullPlayer/Container/index.js
  onTogglePlay: PropTypes.func,
  playerState: PropTypes.object,
=======
  trackName: React.PropTypes.string,
  singerName: React.PropTypes.string,
  trackPercentage: React.PropTypes.number,
  minutesLeft: React.PropTypes.string,
  secondsLeft: React.PropTypes.string,
  cover: React.PropTypes.string,
  isPlaying: PropTypes.bool,
  isRepeatMode: PropTypes.bool,
  onTogglePlay: PropTypes.func,
  onClickPrevious: PropTypes.func,
  onClickNext: PropTypes.func,
  onClickRepeat: PropTypes.func,
>>>>>>> bb2b32bbc27cf0c217d5e20eea8f69789fcec1de:src/components/player/Container/index.js
};
