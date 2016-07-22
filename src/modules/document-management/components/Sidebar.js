// Dependencies.
import React from 'react';


// Define class.
class Sidebar extends React.Component {

  // Render method.
  render() {
    const title = this.props.title;

    return (
      <h2>{title}</h2>
    );
  }
}

// PropTypes declaration.
Sidebar.propTypes = {
  title: React.PropTypes.string,
};

// Export.
export default Sidebar;
