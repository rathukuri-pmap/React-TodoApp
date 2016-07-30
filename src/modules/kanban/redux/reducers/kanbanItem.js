import {
  ADD_ITEM,
  DELETE_ITEM
} from '../constants'

import utils from '../../../../utils';

const kanbanItem = (state = {kanbanItem:[]} , action) => {
  switch (action.type) {
    case ADD_ITEM:
      alert('reducer');
      return object.assign({},state.kanbanItem,{
            id: action.id,
            title: action.title,
            status: action.status
          })

      break;
    case DELETE_ITEM:
      let di = utils.findWithAttr(state.kanbanItem,'id','status',action.id,action.status);
      let newstate = state.kanbanItem;
      return newstate.splice(di,1);
    default:
    alert('default reducer');
    return state;
  }
}
export default kanbanItem;