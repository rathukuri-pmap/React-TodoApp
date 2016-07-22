// Dependencies.
import React from 'react';


// Define class.
class ContentArea extends React.Component {

  // Render method.
  render() {
    const title = this.props.title;

    return (
      <h2>{title}</h2>
    );
  }
}

// PropTypes declaration.
ContentArea.propTypes = {
  title: React.PropTypes.string,
};

// Export.
export default ContentArea;
