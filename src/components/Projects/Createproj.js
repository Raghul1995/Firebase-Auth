import React, { Component } from 'react';

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
		console.log(this.state); //this.state keeps track of the "state"
	};
	render() {
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

export default CreateProj;
