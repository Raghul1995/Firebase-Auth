// Might use state or lifecycle hooks
import React, { Component } from 'react'
import Projlist from '../Projects/Projlist'
import Notifications from './Notifications'
import {connect} from "react-redux"
import {firestoreConnect} from "react-redux-firebase"
import {compose } from 'redux';

export class Dashboard extends Component {
    render() {
       // console.log(this.props)

const {projects} = this.props

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <Projlist projRedData={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                        
                    </div>
                </div>

            </div>
                
            
        )
    }
}
    const mapStateToProp =(state)=>{
        //console.log(state)
        return{
        projects: state.firestore.ordered.proj//getting the state of projReducers "elements" stored in rootreducer as "proj"
    }
}

export default compose(connect(mapStateToProp),
firestoreConnect([
    {collection: "proj"}
]))(Dashboard)
