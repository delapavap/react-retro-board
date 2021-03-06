import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';

export default ({store}) => (
	//react-redux Provider...
	//makes the Redux store available to connect() calls in the entire component hierarchy
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/(board/:boardId)" component={App} />
		</Router>
	</Provider>
)
