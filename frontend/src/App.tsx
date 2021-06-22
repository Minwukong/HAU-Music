import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Root from './components/root';
import Test from './components/test';
import Result from './components/result';
import TestingPage from './pages/TestingPage';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Root} exact />
				<Route path="/test" component={Test} exact />
				<Route path="/result" component={Result} exact />
				<Route path="/testing" component={TestingPage} exact />
			</Switch>
		</Router>
	);
}

export default App;
