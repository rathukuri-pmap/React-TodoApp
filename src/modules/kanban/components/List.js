import React, {Component} from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import AddItem from './AddItem';

class List extends Component {
  constructor() {
    super();
  }
  render(){
    console.log(this.props.items);
    let items;
    if (!this.props.items.length) {
      items = <div>No Items to display</div>
    }
    else {
     items = this.props.items
    .filter(item => item.status === this.props.status)
    .map(
      item => <ListItem key={item.id}
                        id={item.id}
                        title={item.title}
                        status={item.status} />

    );
  }
    return(
      <div>
        <div>
        {items}
        </div>
        <div>
        <AddItem status={this.props.status} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.kanbanItem,
});

export default connect(mapStateToProps)(List);
