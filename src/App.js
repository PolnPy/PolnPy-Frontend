import React, { Component } from 'react';
import './App.css';
import AllergicChecker from './AllergicChecker.js';
import { ToastContainer, toast } from 'react-toastify';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            isHidden: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.allergicCheckerAppear = this.allergicCheckerAppear.bind(this);
    }

    handleChange(e) {
        this.setState({name: e.target.value});
    }

    notify = () => toast.error("Please type a name !", { autoClose: 5000 });

    allergicCheckerAppear() {
        if (this.state.name !== '') {
            this.setState({isHidden: !this.state.isHidden});
        } else {
            this.notify();
        }
    }

    render() {
    return (
      <div>
          <Circle name={this.state.name}
            handleChange={this.handleChange}
            allergicCheckerAppear={this.allergicCheckerAppear}
            title="What's your name ?"/>
          {!this.state.isHidden && <AllergicChecker nameAdded={this.state.name}/>}
          <ToastContainer />
        </div>
      );
    }
}

const Circle = (props) => (
    <div>
        <div className="circle">
            <div className="circle-content">
                <h3 className="circle-title">
                    {props.title}
                </h3>
                <input placeholder="Name ..." value={props.name} onChange={props.handleChange}/>
                <button className="btn" type="button" onClick={props.allergicCheckerAppear}><span>Enter</span></button>
            </div>
        </div>
    </div>
);

export default App;
