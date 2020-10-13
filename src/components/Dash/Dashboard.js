// Might use state or lifecycle hooks
import React, { Component } from 'react'
import Projlist from '../Projects/Projlist'
import Notifications from './Notifications'

export class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <Projlist/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                        
                    </div>
                </div>

            </div>
                
            
        )
    }
}

export default Dashboard
