// Global (global_).
import globalSettings from './settings';
import globalTenant from './tenant';
import globalAuth from './auth';
import globalLang from './lang';
import globalAspSettings from './aspSettings';
import globalAspUserLoginInfo from './aspUserLoginInfo';
import globalAspLegacySession from './aspLegacySession';
import globalUi from './ui';

// Shell (sh_).
import shSettings from '../../modules/shell/redux/reducers/settings';
import shUi from '../../modules/shell/redux/reducers/ui';
import shModuleMenu from '../../modules/shell/redux/reducers/moduleMenu';
import shFlatModuleMenu from '../../modules/shell/redux/reducers/flatModuleMenu';
import shRecentLocationsList from '../../modules/shell/redux/reducers/recentLocationsList';
import shLocationsList from '../../modules/shell/redux/reducers/locationsList';
import shLocationsTree from '../../modules/shell/redux/reducers/locationsTree';
import shLocationsTreeTopLevels from '../../modules/shell/redux/reducers/locationsTreeTopLevels';
import shCustomSettings from '../../modules/shell/redux/reducers/customSettings';
import shBreadcrumbs from '../../modules/shell/redux/reducers/breadcrumbs';
import shUserInfo from '../../modules/shell/redux/reducers/userInfo';
import shModuleLabels from '../../modules/shell/redux/reducers/moduleLabels';
import shLegacyView from '../../modules/shell/redux/reducers/legacyView';
import shModuleMenuSetup from '../../modules/shell/redux/reducers/moduleMenuSetup';

// Document Management (dm_).
import dmSettings from '../../modules/document-management/redux/reducers/settings'
import dmUi from '../../modules/document-management/redux/reducers/ui';
import dmFolder from '../../modules/document-management/redux/reducers/folder';
import dmDocument from '../../modules/document-management/redux/reducers/document';

// todo (td_).
import todos from '../../modules/todo/redux/reducers/todos'
import visibilityFilter from '../../modules/todo/redux/reducers/visibilityFilter';


module.exports = {
  // Global.
  globalSettings,
  globalTenant,
  globalAuth,
  globalAspSettings,
  globalAspUserLoginInfo,
  globalAspLegacySession,
  globalLang,
  globalUi,

  // Shell.
  shSettings,
  shUi,
  shModuleMenu,
  shFlatModuleMenu,
  shRecentLocationsList,
  shLocationsList,
  shLocationsTree,
  shLocationsTreeTopLevels,
  shCustomSettings,
  shBreadcrumbs,
  shUserInfo,
  shModuleLabels,
  shLegacyView,
  shModuleMenuSetup,

  // Document Management.
  dmSettings,
  dmUi,
  dmFolder,
  dmDocument,

  // Todo
  todos,
  visibilityFilter,
};
