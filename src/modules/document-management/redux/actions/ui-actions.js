import {
  DM_TOGGLE_RIGHT_SIDEBAR,
  DM_CHANGE_FOLDER,
} from '../constants/ui-constants';


export function toggleRightSidebar(value) {
  return {
    type: DM_TOGGLE_RIGHT_SIDEBAR,
    value
  };
}

export function changeFolder(id) {
  return { type: DM_CHANGE_FOLDER, id};
}
