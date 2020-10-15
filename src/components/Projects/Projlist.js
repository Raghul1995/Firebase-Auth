//its functional component, any data that is being injected to this component will becalled from the dashboard as a "prop"
import React from 'react';
import ProjSummary from './ProjSummary';

function Projlist({ projRedData }) {
	return (
		<div className="project-list section">
			{projRedData &&
				projRedData.map((projecty) => {
					return <ProjSummary project={projecty} key={projecty.id} />;
				})}
		</div>
	);
}

export default Projlist;
