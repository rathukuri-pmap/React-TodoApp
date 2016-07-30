import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addItem } from '../redux/actions';

class AddItem extends Component {
  constructor() {
    super();
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(this.refs.txtInput.value);
    if (!this.refs.txtInput.value.trim()) {
      return
    }
    this.props.dispatch(addItem(this.props.status,this.refs.txtInput.value))
    //input.value = ''
  }
  render(){
    return(
    <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
      <input type='text' ref='txtInput' />
      <input type='submit' value='Add' />
      </form>
    </div>
  );
  }
}
// PropTypes declaration.
AddItem.propTypes = {
  dispatch: React.PropTypes.func,
};


export default connect()(AddItem);
