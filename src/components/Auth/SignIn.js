import React, { Component } from 'react';
import {connect} from "react-redux"
import {signIn} from "../../store/action/authAction"
export class SignIn extends Component {
	state = {
		email: '',
		password: ''
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value //we are gonna target using "id"
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		//console.log(this.state); //this.state keeps track of the "state"
		this.props.signIn(this.state)
	};
	render() {
		const {authError} = this.props
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Sign In</h5>
					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<button className="btn pink lighten-1 z-depth-0">Login</button>
<div className="red-text center">
		{authError ? <p>{authError}</p> : null}
	</div>			
		</div>
				</form>
			</div>
		);
	}
}
const mapStateToProps=(state)=>{
	return{
		authError:state.auth.authError
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		signIn: (Credent) => dispatch(signIn(Credent))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
