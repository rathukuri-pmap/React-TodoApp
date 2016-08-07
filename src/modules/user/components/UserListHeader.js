import React, {Component} from 'react';
import {deleteUser} from '../redux/actions';
import { connect } from 'react-redux'

class UserListHeader extends Component {
  constructor() {
    super();
  }
  render(){
    let balign={
      textAlign: 'right'
    }
    let userid = this.props.userSelected;
    return(
      <table>
        <tbody>
          <tr>
            <td> User List </td>
            <td style={balign}> <button onClick={
                                    () => userid.length > 0 ?
                                    (this.props.dispatch(deleteUser(userid)),alert('deleted users successfully!'))
                                    : alert('Please selecte users!')
                                  }
                                  > Delete </button>
                                  </td>
          </tr>
        </tbody>
      </table>
    )
  }
}
const mapStateToProps = (state) => ({
  userSelected: state.userSelected,
});
export default connect(mapStateToProps)(UserListHeader);
