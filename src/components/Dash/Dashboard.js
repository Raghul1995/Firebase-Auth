// Might use state or lifecycle hooks
import React, { Component } from 'react'
import Projlist from '../Projects/Projlist'
import Notifications from './Notifications'
import {connect} from "react-redux"
import {firestoreConnect} from "react-redux-firebase"
import {compose } from 'redux';
import {Redirect} from "react-router-dom"

export class Dashboard extends Component {
    render() {
       // console.log(this.props)

const {projects, auth, notifications} = this.props //destructuring of props
if(!auth.uid) return <Redirect to="/signin"/>
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <Projlist projRedData={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications  notifications= {notifications}/>
                        
                    </div>
                </div>

            </div>
                
            
        )
    }
}
    const mapStateToProp =(state)=>{
        //console.log(state)
        return{
        projects: state.firestore.ordered.proj,//getting the state of projReducers "elements" stored in rootreducer as "proj"
           auth: state.firebase.auth, // we can get the authemtication status/ (uid) through this from Navbar.js
            notifications: state.firestore.ordered.notifications // this is a array of ordered notifications which we attach to the props
        }
}

export default compose(connect(mapStateToProp),
firestoreConnect([
    {collection: "proj", orderBy: ['createdAt', 'desc']},
    {collection: "notifications", limit: 3, orderBy: ['time', 'desc']} // limit- show only certain amt of notification
]))(Dashboard)
