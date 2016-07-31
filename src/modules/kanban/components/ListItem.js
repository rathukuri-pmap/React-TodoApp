import React, {Component} from 'react';
import { deleteItem } from '../redux/actions';
import { connect } from 'react-redux';

class ListItem extends Component {
  constructor() {
    super();
  }
  render(){
    return(
    <div className="card">
    {this.props.title} <lable className="delete_item"
                              onClick={() => this.props.dispatch(deleteItem(this.props.status,this.props.id))} >Delete</lable>
    </div>
  );
  }
}

export default connect()(ListItem);
