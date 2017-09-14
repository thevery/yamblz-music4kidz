import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PlayerToggle from '_decorators/PlayerToggle';
import MiniPlayer from '_components/MiniPlayer';
import FullPlayer from '_components/FullPlayer';

import {
  setPlaylist, playerPlay, playerClear,
  playerNext, playerPrev, playerPause,
  playerResume, toggleRepeatMode, likeTrack,
  dislikeTrack, getRadio, showSelector,
  closeSelector,
} from '_actions/player';

import { openModal } from '_actions/modal';

import { playerModeUpdate } from '_actions/playerInfo';

class Player extends Component {
  state = {
    isSelector: false,
  }

  _handlePlayButton = () => {
    const { player } = this.props;

    if (player.isPlaying) {
      this.props.playerPause();
    } else if (player.position !== 0) {
      this.props.playerResume();
    } else {
      this.props.playerPlay(player.trackId);
    }
  };

  _handleNextButton = () => {
    const { player, userInfo } = this.props;

    if (player.isRadio && userInfo.id) {
      this.props.getRadio(userInfo.id);
    }

    this.props.playerNext(player.trackId);
  };

  _handlePreviousButton = () => {
    const { player } = this.props;
    this.props.playerPrev(player.trackId);
  };

  _handleRepeatButton = () => {
    this.props.toggleRepeatMode();
  };

  _handleClickArrowDown = () => {
    this.props.playerModeUpdate('mini');
  };

  _handleOpenListTracks = () => {
    this.props.openModal('listTracks');
  };

  _handleLikeButton = () => {
    const { player, userInfo } = this.props;
    this.props.likeTrack(userInfo.id, player.trackId);
  };

  _handleDislikeButton = () => {
    const { player, userInfo } = this.props;
    this.props.dislikeTrack(userInfo.id, player.trackId);
    this._handleNextButton();
  };

  _handleClickSelector = () => {
    this.setState({
      isSelector: true,
    });
    this.props.showSelector(true);
  }

  _handleCloseSelector = () => {
    this.setState({
      isSelector: false,
    });
    this.props.closeSelector(false);
  }

  render() {
    const {
      player, cardType, cardTitle,
      userInfo, dictionaries: { listEmoji,
        listActions },
    } = this.props;
    const emojiStatus = {
      moodIcon: listEmoji.data[userInfo.moodId].typeIcon,
      actionIcon: listActions.data[userInfo.actionId].typeIcon,
    };

    return (
      <div>
        <PlayerToggle>
          <MiniPlayer
            playerState={player}
            onTogglePlay={this._handlePlayButton}
            type="mini"
          />
          <FullPlayer
            playerState={player}
            onTogglePlay={this._handlePlayButton}
            onClickNext={this._handleNextButton}
            onClickPrevious={this._handlePreviousButton}
            onClickRepeat={this._handleRepeatButton}
            onClickArrowDown={this._handleClickArrowDown}
            openListTracks={this._handleOpenListTracks}
            onLikeClick={this._handleLikeButton}
            onDislikeClick={this._handleDislikeButton}
            onClickSelector={this._handleClickSelector}
            type="full"
            cardType={cardType}
            cardTitle={cardTitle}
            emojiStatus={emojiStatus}
            listEmoji={listEmoji}
            listActions={listActions}
            userInfo={userInfo}
            isSelector={this.state.isSelector}
            onCloseSelector={this._handleCloseSelector}
          />
        </PlayerToggle>
      </div>
    );
  }
}

export default connect((state, props) => ({
  player: state.player,
  userInfo: state.user.data,
  cardType: state.playerInfo.cardType,
  cardTitle: state.playerInfo.cardTitle,
  dictionaries: state.dictionaries,
  ...props,
}), {
  openModal,
  setPlaylist,
  playerPlay,
  playerClear,
  playerNext,
  playerPrev,
  playerPause,
  playerResume,
  toggleRepeatMode,
  playerModeUpdate,
  likeTrack,
  dislikeTrack,
  getRadio,
  showSelector,
  closeSelector,
})(Player);

Player.propTypes = {
  player: PropTypes.object,
  openModal: PropTypes.func,
  playerPlay: PropTypes.func,
  playerNext: PropTypes.func,
  playerPrev: PropTypes.func,
  playerPause: PropTypes.func,
  playerResume: PropTypes.func,
  toggleRepeatMode: PropTypes.func,
  playerModeUpdate: PropTypes.func,
  cardType: PropTypes.number,
  likeTrack: PropTypes.func,
  dislikeTrack: PropTypes.func,
  userInfo: PropTypes.object,
  cardTitle: PropTypes.string,
  dictionaries: PropTypes.object,
  getRadio: PropTypes.func,
  showSelector: PropTypes.func,
  closeSelector: PropTypes.func,
};
