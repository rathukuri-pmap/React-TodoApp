import {
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM_STATUS
} from '../constants'

import utils from '../../../../utils';

const kanbanItem = (state={kanbanItem:[]}, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return (
          [...state,{
            id: action.id,
            title: action.title,
            status: action.status
          }]
      )
      break;
    case DELETE_ITEM:
      return state.filter(
        (ki) => ki.id !== action.id
      )

      break;
    case UPDATE_ITEM_STATUS:
      return state.map(
        (t) => t.id === action.id ? Object.assign({}, t, {
          status: action.status
        }) : t
      )
      break;
    default:
    return state;
  }
}
export default kanbanItem;
