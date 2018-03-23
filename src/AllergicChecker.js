import React, { Component } from 'react';
import './App.css';
import PollenChooser from './PollenChooser.js'
import { ToastContainer, toast } from 'react-toastify';

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

    notify = () => toast("Wtf are you doing here ?", { autoClose: 3000 });

    toggleKind(e) {
        this.setState({isHidden: !this.state.isHidden});
    }
    render() {
    return (
    <div>
      <div className="circle2">
          <div className="circle2-content">
              <h3>
                  Are you allergic to pollen {this.props.nameAdded} ?
              </h3>
              <button className="btn checker y" type="button" onClick={this.toggleKind}><span>Yes</span></button>
              <button className="btn checker n" type="button" onClick={this.notify}><span>No</span></button>
          </div>
      </div>
      {!this.state.isHidden && <PollenChooser/>}
      <ToastContainer />
     </div>
      );
    }
}

export default AllergicChecker;
