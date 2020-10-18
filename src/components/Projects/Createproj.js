import React, { Component } from 'react';
import{connect} from "react-redux"
import{createProj} from  "../../store/action/projAction"
import {Redirect} from "react-router-dom"

export class CreateProj extends Component {
	state = {
		Title: '',
		Content: ''
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value //we are gonna target using "id"
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		//console.log(this.state); //this.state keeps track of the "state"
		this.props.creatingProject(this.state)
	};
	render() {
		const {auth} = this.props
		if(!auth.uid) return <Redirect to="/signin"/>

		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Create Project</h5>
					<div className="input-field">
						<label htmlFor="title">Title</label>
						<input type="text" id="title" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="Content">Content</label>
						<textarea id="content" className="materialize-textarea" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<button className="btn pink lighten-1 z-depth-0">Create</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state)=>{
	return{
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) =>{
	return {
		 creatingProject: (project) =>dispatch(createProj(project))

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProj);
