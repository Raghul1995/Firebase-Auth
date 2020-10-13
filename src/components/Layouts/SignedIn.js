//since this component has no states it uses funnction component
import React from 'react';
import { NavLink } from 'react-router-dom';
function SignedIn() {
	return (
    <ul className="right" /*floats everything to right */> 
        <li><NavLink to="/createproj">New Project</NavLink></li>
        <li><NavLink to="/">Log Out</NavLink></li>
        <li><NavLink to="/" className="btn btn-floating pink lighten-1">RM</NavLink></li>
    </ul>

		
	);
}

export default SignedIn;
