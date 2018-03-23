import React, { Component } from 'react';
import './App.css';
import PollenChooser from './PollenChooser.js'

class AllergicChecker extends Component {
    constructor(props){
        super(props);
        this.props = {
            nameAdded: ''
        }
        this.state = {
            isHidden: true
        }
        this.toggleKind = this.toggleKind.bind(this);
    }
    toggleKind(e) {
        this.setState({isHidden: !this.state.isHidden});
    }
    render() {
    return (
    <div>
      <div className="circle2">
          <div className="circle2-content">
              <h3>
                  Are you alergic to pollen {this.props.nameAdded} ?
              </h3>
              <button className="btn checker y" type="button" onClick={this.toggleKind}><span>Yes</span></button>
              <button className="btn checker n" type="button"><span>No</span></button>
          </div>
      </div>
      {!this.state.isHidden && <PollenChooser/>}
     </div>
      );
    }
}

export default AllergicChecker;
