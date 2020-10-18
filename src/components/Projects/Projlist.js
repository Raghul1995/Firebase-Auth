//its functional component, any data that is being injected to this component will becalled from the dashboard as a "prop"
import React from 'react';
import ProjSummary from './ProjSummary';
import { Link } from 'react-router-dom';

function Projlist({ projRedData }) {
	return (
		<div className="project-list section">
			{projRedData &&
				projRedData.map((projecty) => {
					return <Link to={"/Project/"+ projecty.id} key={projecty.id}>
					<ProjSummary project={projecty}  />
					</Link>
				})}
		</div>
	);
}

export default Projlist;
