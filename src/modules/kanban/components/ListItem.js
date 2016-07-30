import React, {Component} from 'react';

class ListItem extends Component {
  constructor() {
    super();
  }
  render(){
    <div>
    {this.props.title}
    </div>
  }
}

export default ListItem;
