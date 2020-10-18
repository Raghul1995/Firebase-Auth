//since this component has no states
import React from 'react';
import { Link } from 'react-router-dom';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import {connect} from "react-redux"

function NavBar() {
	return (
		<nav className="nav-wrapper grey darken-3">
			<div className="container">
				<Link to="/" className="brand-logo left">Mario</Link>
					
			     <SignedIn/>
                 <SignedOut/>

			</div>
		</nav>
	);
}
const mapStateToProps =(state)=>{
	console.log(state)
	return{

	}
}

export default connect(mapStateToProps)(NavBar);
