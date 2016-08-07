import React, {Component} from 'react';
import UserListHeader from './components/UserListHeader';
import UserList from './components/UserList';

// Layout components.
import Main from '../../layouts/main';



class UserApp extends Component {
  constructor() {
    super();
  }
  render() {
    return(
      <Main>
        <h1>User Management</h1>
        <UserListHeader />
        <UserList />
      </Main>
    )
  }
}

export default UserApp;
