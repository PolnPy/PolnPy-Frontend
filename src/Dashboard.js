import React, { Component } from 'react';
import './App.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.props = {
            name: ''
        }
    }
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
            </div>
          )
    }
}

export default Dashboard;
