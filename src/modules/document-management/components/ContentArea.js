// Dependencies.
import React from 'react';
import { connect } from 'react-redux';


// Define class.
class ContentArea extends React.Component {

  // Render method.
  render() {
    const { dmFolder, dmDocument, title } = this.props;

    // Folder data.

    return (
      <h2>{title}</h2>
    );
  }
}

// PropTypes declaration.
ContentArea.propTypes = {
  title: React.PropTypes.string,
  dispatch: React.PropTypes.func,
  dmFolder: React.PropTypes.object,
  dmDocument: React.PropTypes.object
};

const mapStateToProps = (state) => ({
  dmFolder: state.dmFolder,
  dmDocument: state.dmDocument,
});

// Export.
export default connect(mapStateToProps)(ContentArea);
