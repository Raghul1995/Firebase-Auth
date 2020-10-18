import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {Redirect} from "react-router-dom"

function ProjDetails(props) {
	const { Project, auth } = props; //destructured from mapStateToProps "Project"
	if(!auth.uid) return <Redirect to="/signin"/>

	if (Project) {
		return (
			<div className="container section project-details">
				<div className="card z-depth-0 ">
					<div className="card-content ">
						<span className="card-title">{Project.title}</span>
						<p>{Project.content}</p>
					</div>
					<div className="card-action grey lighten-4 grey-text">
						<div>
							Posted by {Project.authorLastName} {Project.authorFirstName}
						</div>
						<div>2nd Sep, 2am</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="container center">
				<p>Loading Project...</p>
			</div>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const projects = state.firestore.data.proj;
	const Project = projects ? projects[id] : null;

	return {
		Project: Project,
		auth: state.firebase.auth
	};
};

export default compose(connect(mapStateToProps), firestoreConnect([ { collection: 'proj' } ]))(ProjDetails);
