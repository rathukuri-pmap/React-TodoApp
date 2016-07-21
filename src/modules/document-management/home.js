// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';

// Layout components.
import Main from '../../layouts/main';

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

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(toggleRightSidebar(true));
  }

  handleToggleClick() {
    const { dispatch, dmUi } = this.props;
    dispatch(toggleRightSidebar(!dmUi.rightSidebarOpened));
  }

  // Render method.
  render() {
    const { dmUi } = this.props;

    const { rightSidebarOpened } = dmUi;

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
          {' '}
          <Button bsStyle="primary" bsSize="sm" onClick={this.handleToggleClick.bind(this)}>Toggle Sidebar</Button>
        </h1>

        <Row>

          <Col sm={rightSidebarOpened ? 9 : 12} style={styles.mainContent}>
            Main Content
          </Col>

          <Col sm={3} style={styles.sidebar}>
            Sidebar
          </Col>

        </Row>

      </Main>
    );
  }
}

// Validation.
DocumentManagement.propTypes = {
  dispatch: React.PropTypes.func,
  dmUi: React.PropTypes.object,
};

const mapStateToProps = (state) => ({
  dmUi: state.dmUi,
});

// Export.
export default connect(mapStateToProps)(DocumentManagement);
