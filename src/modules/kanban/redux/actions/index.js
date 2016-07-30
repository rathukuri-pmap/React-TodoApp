import {
  ADD_ITEM,
  DELETE_ITEM
} from '../constants'

let nextid = 1;
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
