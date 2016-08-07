import {
  USER_DELETE,
  USER_CHK_SELECTED
} from '../constants/user_constants';

export const deleteUser = (userids) => {
  return(
    {
      type: USER_DELETE,
      payload: userids
    }
  )
}

export const chkSelected = (userid,status) => {
  return (
    {
      type: USER_CHK_SELECTED,
      payload: userid,
      status: status
    }
  )
}
