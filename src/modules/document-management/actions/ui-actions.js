import {
  SH_TOGGLE_RIGHT_SIDEBAR,
} from '../constants/ui-constants';


// Global.
export function toggleRightSidebar(value) {
  return {
    type: SH_TOGGLE_RIGHT_SIDEBAR,
    value
  };
}
