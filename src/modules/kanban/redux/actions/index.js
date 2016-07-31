import {
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM_STATUS
} from '../constants'

let nextid = 0;
export const addItem = (status,title) => {
        return {
            id: nextid++,
            type: ADD_ITEM,
            title: title,
            status: status
          }
}

export const deleteItem = (status,id) => {
        return {
            id: id,
            type: DELETE_ITEM,
            status: status
          }
  }

export const updateItemStatus = (id,status) => {
        return {
            id: id,
            type: UPDATE_ITEM_STATUS,
            status: status
          }
  }
