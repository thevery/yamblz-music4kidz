import * as PlayerActions from '_actions/playerActionTypes.js';

const defaultState = {
  isPlaying: false,
  cover: '',
  singerName: '',
  trackName: '',
  position: 0,
  trackId: 4451438,
  duration: 0,
};

export default function (state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case PlayerActions.PLAYER_START:
      return {
        ...state,
        trackId: payload.trackId,
        position: 0,
        duration: 0,
        isPlaying: false,
      };

    case PlayerActions.PLAYER_RESUME:
      return {
        ...state,
      };

    case PlayerActions.PLAYER_PLAYED:
      return {
        isPlaying: true,
      };

    case PlayerActions.PLAYER_STOP:
    case PlayerActions.PLAYER_PAUSE:
    case PlayerActions.PLAYER_NEXT:
    case PlayerActions.PLAYER_PREV:
      return {
        ...state,
        isPlaying: false,
      };

    case PlayerActions.PLAYER_CLEAR:
      return {
        ...defaultState,
      };

    case PlayerActions.PLAYER_SAVE_TRACK:
      return {
        ...state,
        cover: payload.imageUrl,
        singerName: payload.artist,
      };

    case PlayerActions.PLAYER_PROGRESS:
      return {
        ...state,
        position: payload.position,
        duration: payload.duration,
      };
    case PlayerActions.PLAYER_ENDED:
      return {
        ...state,
        isPlaying: false,
      };

    case PlayerActions.SET_TRACK_INFO:
      return {
        ...state,
        ...payload,
      };

    case PlayerActions.SET_PLAYLIST:
      return {
        ...state,
        playlist: payload.playlist,
      };

    case PlayerActions.TOGGLE_REPEAT:
      return {
        ...state,
        isRepeatMode: !state.isRepeatMode,
      };

    default:
      return state;
  }
}
