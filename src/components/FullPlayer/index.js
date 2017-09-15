import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CircularAvatar from '_components/CircularAvatar';
import CARDS from '_data/cardsType';
import { getTime } from '_helpers';

import Header from './Header';
import Likes from './Likes';
import Controls from './Controls';
import Footer from './Footer';
import Background from './Background';

import style from './style.styl';

export default class FullPlayer extends Component {
  render() {
    const {
      playerState, cardType, playerCallbacks,
      cardTitle, emojiStatus, isAdded,
    } = this.props;

    const {
      onClickArrowDown, onLikeClick, onDislikeClick,
    } = playerCallbacks;

    const {
      trackName, singerName, position,
      duration, cover, isPlaying, isRepeatMode,
    } = playerState;

    const percentage = position / duration;
    return (
      <div>
        <div className={style.wrapper}>
          <Header
            onClickArrowDown={onClickArrowDown}
            cardType={cardType}
            cardTitle={cardTitle}
            emojiStatus={emojiStatus}
          />
          <div>
            { cardType === CARDS.personal &&
            <Likes onLikeClick={onLikeClick} onDislikeClick={onDislikeClick} /> }
            <CircularAvatar
              image={cover}
              progress={percentage}
              radius={0.18}
              time={getTime(position, duration)}
            />
          </div>
          <div className={style.titleRow}>
            <div className={style.songName}>{trackName}</div>
            <div className={style.artistName}>{singerName}</div>
          </div>
          <Controls
            callbacks={playerCallbacks}
            isPlaying={isPlaying}
            cardType={cardType}
          />
          <Footer
            callbacks={playerCallbacks}
            isRepeatMode={isRepeatMode}
            cardType={cardType}
            isAdded={isAdded}
          />
          <Background cover={cover} />
        </div>
      </div>
    );
  }
}

FullPlayer.propTypes = {
  playerCallbacks: PropTypes.objectOf(PropTypes.func),
  playerState: PropTypes.object,
  cardType: PropTypes.number,
  cardTitle: PropTypes.string,
  emojiStatus: PropTypes.object,
  isAdded: PropTypes.bool,
};
