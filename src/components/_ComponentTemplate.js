// Dependencies.
import React from 'react';
import { Button } from 'react-bootstrap';


// Define class.
class ComponentTemplate extends React.Component {

  // Render method.
  render() {
    const title = this.props.title;

    return (
      <div>
        <p className="lead">{title}</p>
        <p>
          <Button bsStyle="success">Button</Button>
          <span> and </span>
          <Button>Another Button</Button>
        </p>
      </div>
    );
  }
}

// PropTypes declaration.
ComponentTemplate.propTypes = {
  title: React.PropTypes.string,
};

// Export.
export default ComponentTemplate;
