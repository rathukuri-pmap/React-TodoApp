import {
  SH_TOGGLE_RIGHT_SIDEBAR,
} from '../constants/ui-constants';

function UiReducer(state = {}, action) {
  switch (action.type) {
  case SH_TOGGLE_RIGHT_SIDEBAR:
    return {
      ...state,
      rightSidebarOpened: action.value
    };
  default:
    return state;
  }
}

export default UiReducer;
