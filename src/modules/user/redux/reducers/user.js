import {
  USER_DELETE
} from '../constants/user_constants';

let initialstate = [
  { firstname: 'Ram', lastname: 'Athukuri' , username:'rathukuri', userid: '1' },
  { firstname: 'Ravi Kiran', lastname: 'Jakkipalli' , username:'rjakkipalli', userid: '2' },
  { firstname: 'Adinarayana', lastname: 'Cheede' , username:'acheede', userid: '3' },
  { firstname: 'Sridhar Reddy', lastname: 'Pagala' , username:'spagala', userid: '4' }
];

const user = (state = initialstate,action) => {
  switch (action.type) {
    case USER_DELETE:
      console.log(action.payload);
      return state.filter(
        (u) => action.payload.indexOf(u.userid) === -1
      );
      break;
    default:
      return state;
  }
}
export default user;
