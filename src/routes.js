import React from 'react';
import { Router, Route, IndexRedirect, Redirect } from 'react-router';
import { history } from './redux/store';

// Pages.
import App from './app';
import Home from './modules/global/pages/home';
import About from './modules/global/pages/about';
import PageNotFound from './modules/global/pages/404';

import DocumentManagement from './modules/document-management/home';
import TodoApp from './modules/todo/home';

let onUpdate = () => { window.scrollTo(0, 0); };

// Routes template.
export default (
	<Router history={history}>
		<Route path="/" component={Home} onUpdate={onUpdate} />
		<Route path="/home" component={Home} title="Home" onUpdate={onUpdate} />
		<Route path="/about" component={About} title="Home" onUpdate={onUpdate} />
		<Route path="/document-management" component={DocumentManagement} title="Document Management" onUpdate={onUpdate} />
		<Route path="/todo" component={TodoApp} title="todo" onUpdate={onUpdate} />
		<Route path="/oops" component={PageNotFound} title="Page Not Found" onUpdate={onUpdate} />
		<Redirect from='*' to='/oops' />
	</Router>
);
