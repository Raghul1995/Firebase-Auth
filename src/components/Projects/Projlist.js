//its functional component, any data that is being injected to this component will becalled from the dashboard as a "prop"
import React from 'react'
import ProjSummary from './ProjSummary'

function Projlist() {
    return (
<div className="project-list section">
  <ProjSummary/>
  <ProjSummary/>
  <ProjSummary/>
  <ProjSummary/>
    
</div>            
    )
}

export default Projlist
