import React, {Component} from 'react';
import { deleteItem } from '../redux/actions';
import { connect } from 'react-redux';

class ListItem extends Component {
  constructor() {
    super();
  }
  render(){
    return(
    <div>
    {this.props.title} <lable onClick={() => this.props.dispatch(deleteItem(this.props.status,this.props.id))} >x</lable>
    </div>
  );
  }
}

export default connect()(ListItem);
