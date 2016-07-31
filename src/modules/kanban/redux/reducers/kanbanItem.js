import {
  ADD_ITEM,
  DELETE_ITEM
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
    default:
    return state;
  }
}
export default kanbanItem;
