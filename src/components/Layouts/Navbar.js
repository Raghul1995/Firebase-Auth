//since this component has no states
import React from 'react';
import { Link } from 'react-router-dom';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import {connect} from "react-redux"

function NavBar(props) {
	const {auth, profile} = props
	//console.log(auth)
	const links = auth.uid ?  <SignedIn profile={profile}/> :	<SignedOut/>
	return (
		<nav className="nav-wrapper grey darken-3">
			<div className="container">
				<Link to="/" className="brand-logo left">Mario</Link>
					
			     {links}

			</div>
		</nav>
	);
}
const mapStateToProps =(state)=>{
	//console.log(state)
	return{
		auth: state.firebase.auth,
		profile: state.firebase.profile // we get this if we console.log(state), under firebase->profile
	}
}

export default connect(mapStateToProps)(NavBar);
