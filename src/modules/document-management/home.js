// Dependencies.
import React from 'react';
import { Row, Col } from 'react-bootstrap';

// Layout components.
import Main from '../../layouts/main';
import ContentArea from './components/ContentArea';
// import Sidebar from './components/Sidebar';

// Utilities.
import utils from '../../utils';


// Doc Mgt actions.
import { toggleRightSidebar } from './redux/actions/ui-actions';


// Define class.
class DocumentManagement extends React.Component {
  constructor(props) {
    super(props);

    // Set page title.
    utils.title(props);
  }

  // Render method.
  render() {
    const styles = {
      mainContent: {
        minHeight: 400,
        background: '#DDDDDD',
        transition: 'all .5s ease',
      },

      sidebar: {
        position: 'absolute',
        right: 0,
        minHeight: 400,
        background: '#AAAAAA',
        zIndex: -1,
      },
    };

    return (
      <Main>
        <h1>
          Document Management
        </h1>

        <Row>

          <Col sm={9} style={styles.mainContent}>
            <ContentArea title="Main Content" />
          </Col>

          <Col sm={3} style={styles.sidebar}>
            Sidebar
          </Col>

        </Row>

      </Main>
    );
  }
}


// Export.
export default DocumentManagement;
