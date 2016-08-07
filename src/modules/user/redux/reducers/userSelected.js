import {
  USER_CHK_SELECTED
} from '../constants/user_constants';

const userSelected = (state=[],action) => {
  switch (action.type) {
    case USER_CHK_SELECTED:
      if (action.status){
      return (
        [...state,action.payload]
      );
    } else {
      return state.filter(
        (i) => i !== action.payload
      )
    }
      break;
    default:
      return state;
  }
}
export default userSelected;
