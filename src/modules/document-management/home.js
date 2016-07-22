// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';

// Layout components.
import Main from '../../layouts/main';
import ContentArea from './components/ContentArea';
import Sidebar from './components/Sidebar';

// Utilities.
import utils from '../../utils';


// Doc Mgt actions.
import { toggleRightSidebar, changeFolder } from './redux/actions/ui-actions';
import { dmSetModuleId, dmSetFolderViewType } from './redux/actions/settings-actions';
import { fetchFolder } from './redux/actions/folder-actions';


// Define class.
class DocumentManagement extends React.Component {
  constructor(props) {
    super(props);

    // Set page title.
    utils.title(props);

    this.state = {
      initialDataLoaded: false,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;

    // Set redux state default values.
    dispatch(dmSetModuleId(36));
    dispatch(dmSetFolderViewType('AllDocuments'));
    dispatch(changeFolder('root'));
    dispatch(toggleRightSidebar(true));

    // Fetch data.
    this.fetchInitialData();
  }

  // Only called when the props have changed and when this is not an initial rendering.
  componentWillReceiveProps() {
    // Fetch data.
    this.fetchInitialData();
  }

  // Fetch data method.
  fetchInitialData() {
    const { dispatch, globalSettings } = this.props;

    // console.log('globalSettings.authorizationToken:', globalSettings.authorizationToken);
    // console.log('this.state.initialDataLoaded:', this.state.initialDataLoaded);
    // console.log(globalSettings.authorizationToken && !this.state.initialDataLoaded);

    // Dispatch actions after authentication.
    if (globalSettings.authorizationToken && !this.state.initialDataLoaded) {
      dispatch(fetchFolder('root'));
      this.setState({initialDataLoaded: true});
    }
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
        right: rightSidebarOpened ? 0 : '-25%',
        minHeight: 400,
        background: '#CBCBCB',
        transition: 'all .5s ease',
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
            <ContentArea title="List" />
          </Col>

          <Col sm={3} style={styles.sidebar}>
            <Sidebar title="Details" />
          </Col>

        </Row>

      </Main>
    );
  }
}

// Validation.
DocumentManagement.propTypes = {
  dispatch: React.PropTypes.func,
  globalSettings: React.PropTypes.object,
  dmUi: React.PropTypes.object,
};

const mapStateToProps = (state) => ({
  globalSettings: state.globalSettings,
  dmUi: state.dmUi,
});

// Export.
export default connect(mapStateToProps)(DocumentManagement);
