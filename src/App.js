import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Dashboard from './components/Dash/Dashboard';
import NavBar from './components/Layouts/Navbar';
import CreateProj from './components/Projects/Createproj';
import ProjDetails from './components/Projects/ProjDetails';
class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<NavBar />
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route path="/Project/:id" component={ProjDetails} />
						<Route path="/signin" component={SignIn} />
						<Route path="/signup" component={SignUp} />
						<Route path="/createproj" component={CreateProj} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
