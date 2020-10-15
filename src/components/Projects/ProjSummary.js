import React from 'react';

function ProjSummary({project}) {
	return (
		<div className="card z-depth-0 project-summary">
			<div className="card-content grey-text text-darken-3">
				<span className="card-title">{project.title}</span>
				<p>Posted by foreign </p>
				<p className="grey-text">12th Oct</p>
			</div>
		</div>
	);
}

export default ProjSummary;
