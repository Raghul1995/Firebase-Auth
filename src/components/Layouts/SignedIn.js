//since this component has no states it uses funnction component
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/action/authAction';
function SignedIn(props) {
	console.log(props)
	return (
		<ul className="right" /*floats everything to right */>
			<li>
				<NavLink to="/createproj">New Project</NavLink>
			</li>
			<li>
				<a onClick={props.signOut}>Log Out</a>
			</li>
			<li>
				<NavLink to="/" className="btn btn-floating pink lighten-1">
				{props.profile.initials}
				</NavLink>
			</li>
		</ul>
	);
}
const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => dispatch(signOut())
	};
};

export default connect(null, mapDispatchToProps)(SignedIn);
