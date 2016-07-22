// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

// Utilities.
import utils from '../../../utils';


// Doc Mgt actions.
import { changeFolder } from '../redux/actions/ui-actions';
import { fetchFolder } from '../redux/actions/folder-actions';


// Define class.
class ContentArea extends React.Component {

  handleFolderClick(uid, e) {
    e.preventDefault();
    // const {dispatch } = this.props;
    //
    // // Redux action.
    // dispatch(fetchFolder(uid));
    // dispatch(changeFolder(uid));
  }

  // Render method.
  render() {
    const { dmFolder, title } = this.props;

    const styles = {
      listItem: {
        padding: 8,
        margin: 0,
        borderTop: '1px solid #AAAAAA',
      },
    };

    // Folder data.
    const folderData = dmFolder.items ? dmFolder.items : [];
    const folders = folderData ? folderData.Subfolders : [];
    const fetchingFolders = dmFolder.isFetching;

    // Folders list.
    let folderList = [];
    if (folders) {
      utils.alphabetizeByKey(folders, 'Description').forEach(item => {
        if (item.Uid) {
          folderList.push(
            <a href key={utils.unique()} className="block" style={styles.listItem}
              onClick={this.handleFolderClick.bind(this, item.Uid)}>
              {item.Description}
            </a>
          );
        }
      });
    }

    // Document data.
    const documents = folderData ? folderData.Documents : [];

    // Documents list.
    let documentList = [];
    if (documents) {
      utils.alphabetizeByKey(documents, 'Title').forEach(item => {
        if (item.Uid) {
          documentList.push(
            <a href key={utils.unique()} className="block clearfix" style={styles.listItem}>
              <span className="pull-left">{item.Title}</span>
              <span className="pull-right">{item.Owner}</span>
            </a>
          );
        }
      });
    }

    console.log(documents);

    return (
      <div>
        <h2>{title}</h2>

        {fetchingFolders ?
          <p>Loading folders</p>
        :
          <div>
            {folderList}
            {documentList}
          </div>
        }

      </div>
    );
  }
}

// PropTypes declaration.
ContentArea.propTypes = {
  title: React.PropTypes.string,
  dispatch: React.PropTypes.func,
  dmFolder: React.PropTypes.object,
};

const mapStateToProps = (state) => ({
  dmFolder: state.dmFolder,
});

// Export.
export default connect(mapStateToProps)(ContentArea);
