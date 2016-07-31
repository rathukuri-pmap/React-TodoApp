import React, {Component} from 'react';
import { deleteItem, updateItemStatus } from '../redux/actions';
import { connect } from 'react-redux';
import { DragSource } from 'react-dnd';

const cardDragSpec = {
  beginDrag(props) {
    return {
      id: props.id,
      status: props.status
    };
  },
  endDrag(props, monitor) {

    const dragItem = monitor.getItem();
    const didDrop = monitor.didDrop();
    const dropResult = monitor.getDropResult();
    if (dropResult) {
      console.log('called'+updateItemStatus(dragItem.id,dropResult.status));
      props.dispatch(updateItemStatus(dragItem.id,dropResult.status));
    }
  }
}

let collectDrag = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class ListItem extends Component {
  constructor() {
    super();
  }
  render(){
    const { isDragging, connectDragSource } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    const style = {
      opacity: opacity
    };
    return connectDragSource(
    <div className="card" style={style}>
    {this.props.title} <a onClick={() => this.props.dispatch(deleteItem(this.props.status,this.props.id))} ><u>Delete</u></a>
    </div>
  );
  }
}
let ds = DragSource('listItem', cardDragSpec, collectDrag)(ListItem);
export default connect()(ds);
