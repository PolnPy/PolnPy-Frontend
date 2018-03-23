import React, { Component } from 'react';
import './App.css';

class PollenChooser extends Component {
    render() {
    return (
        <div>
            <div className="circle3">
              <div className="circle3-content">
                  <h3>
                    Do you know what type of pollen you are allergic to ?
                  </h3>
                  <button className="btn checker y" type="button"><span>Yes</span></button>
                  <button className="btn checker n" type="button"><span>No</span></button>
              </div>
            </div>
        </div>
      );
    }
}

export default PollenChooser;
