import {
  DM_TOGGLE_RIGHT_SIDEBAR,
  DM_CHANGE_FOLDER,
} from '../constants/ui-constants';

function UiReducer(state = {}, action) {
  switch (action.type) {

  case DM_TOGGLE_RIGHT_SIDEBAR:
    return {
      ...state,
      rightSidebarOpened: action.value
    };

  case DM_CHANGE_FOLDER:
    return {
      ...state,
      currentFolderId: action.id
    };

  default:
    return state;
  }
}

export default UiReducer;
