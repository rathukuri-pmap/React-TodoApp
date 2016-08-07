import React, {Component} from 'react';
import {connect} from 'react-redux';
import {chkSelected} from '../redux/actions';

class UserRecord extends Component {
  constructor() {
    super();
  }
  render(){
    return(
      <tr>
        <td><input type='checkbox' value = {this.props.userid}
                                   onClick = {
                                    (e) => this.props.dispatch(chkSelected(e.target.value,e.target.checked))
                                  }
                                  /></td>
        <td>{this.props.firstname}</td>
        <td>{this.props.lastname} </td>
        <td>{this.props.username} </td>
      </tr>
    )
  }
}
export default connect()(UserRecord);
