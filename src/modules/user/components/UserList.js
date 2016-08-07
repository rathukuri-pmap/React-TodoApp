import React, {Component} from 'react';
import UserRecord from './UserRecord';
import {connect} from 'react-redux';

class UserList extends Component {
  constructor() {
    super();
  }
  render(){
    let users;
    if (!this.props.users.length) {
      users = 'No Items to display'
    }
    else {

      users = this.props.users.map(
        (user) => <UserRecord key={user.userid}
                              userid = {user.userid}
                              firstname = {user.firstname}
                              lastname = {user.lastname}
                              username = {user.username} />
      )
    }
    return (
      <table>
        <thead>
          <tr>
            <th> # </th>
            <th> First Name </th>
            <th> Last Name </th>
            <th> Username </th>
          </tr>
        </thead>
        <tbody>
          {users}
        </tbody>
      </table>
    )
  }
}
const mapStateToProps = (state) => ({
      users: state.user,
});

export default connect(mapStateToProps)(UserList);
