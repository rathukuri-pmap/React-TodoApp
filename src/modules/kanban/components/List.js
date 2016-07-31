import React, {PropTypes,Component} from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import AddItem from './AddItem';
import { DropTarget } from 'react-dnd';

const cardDropSpec = {
  canDrop(props,monitor){
    return true;
  },
  drop(props,monitor,component){
    return {status:props.status}
  }
}


let collectDrop = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}


class List extends Component {
  constructor() {
    super();
  }
  render(){
    const {  isOver, connectDropTarget, canDrop} = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = '#eee';
    if (isActive) {
      backgroundColor = '#F7F7BD';
    } else if (canDrop) {
      backgroundColor = '#F7F7F7';
    }

    const style = {
      backgroundColor: backgroundColor
    };

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
    return connectDropTarget(
      <div className='listArea' style={style}>
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
List.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired
}
const mapStateToProps = (state) => ({
  items: state.kanbanItem,
});
let dt = DropTarget('listItem', cardDropSpec, collectDrop)(List);
export default connect(mapStateToProps)(dt);
