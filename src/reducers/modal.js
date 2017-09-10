import { MODAL_OPEN, MODAL_CLOSE } from '_actions/modal';

const defaultState = {};

export default function (state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case MODAL_OPEN:
      return {
        ...state,
        [payload.name]: true,
      };
    case MODAL_CLOSE:
      return {
        ...defaultState,
      };
    default:
      return state;
  }
}
