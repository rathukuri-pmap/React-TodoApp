// Dependencies.
import React from 'react';
import { Row, Col } from 'react-bootstrap';

// Layout components.
import Main from '../../layouts/main';

// Utilities.
import utils from '../../utils';


// Define class.
class DocumentManagement extends React.Component {
  constructor(props) {
    super(props);

    // Set page title.
    utils.title(props);
  }

  // Render method.
  render() {
    return (
      <Main>
        <h1>Document Management</h1>

        <Row>
          <Col sm={9}>
            Main Content
          </Col>
          <Col sm={3}>
            Sidebar
          </Col>
        </Row>

      </Main>
    );
  }
}

// Export.
export default DocumentManagement;
