import React, { Component } from 'react';
import './App.css';

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
    <div className="App">
      <div className="circle-container check">
          <div className="circle2">
              <div className="circle2-content">
                  <h5>
                      Are you alergic to pollen {this.props.nameAdded} ?
                  </h5>
                  <button className="btn checker y" type="button" onClick={this.toggleKind}><span>Yes</span></button>
                  <button className="btn checker n" type="button"><span>No</span></button>
              </div>
          </div>
      </div>
      {!this.state.isHidden && <AllergicChecker nameAdded={this.state.name}/>}
     </div>
      );
    }
}

export default AllergicChecker;
