import React from 'react'

function ProjDetails(props) {
const id =  props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0 ">
			<div className="card-content ">
    <span className="card-title">Project Title-{id}</span>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium ducimus placeat dolores repellat, suscipit totam, doloribus eos, voluptates perferendis quidem nisi sed rerum! Dolorum quos corporis enim voluptas sequi eaque. </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
            <div>Posted by the next person</div>
            <div>2nd Sep, 2am</div>
        </div>
        </div>
        </div>
    )
}

export default ProjDetails
