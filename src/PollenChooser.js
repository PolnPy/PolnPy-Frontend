import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Modal from 'react-responsive-modal';
import './custom-modal.css';
import Dashboard from './Dashboard.js';

class PollenChooser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            pollenList: []
        }
    }
    componentDidMount() {
        fetch('http://82.223.27.78:81/list')
        .then(res => {
            return res.json();
        })
        .then(data => {
            this.setState({pollenList:data});
            console.log(this.state.pollenList);
        })
    }
    onOpenModal = () => {
        this.setState({ open: true });
    };
    onCloseModal = () => {
        this.setState({ open: false });
    };
    openPollenTypeDasboard(name, e) {
        this.onCloseModal();
    }
    render() {
    return (
        <div>
            <div className="circle3">
              <div className="circle3-content">
                  <h3>
                    Do you know what type of pollen you are allergic to ?
                  </h3>
                  <button className="btn checker y" type="button" onClick={this.onOpenModal}><span>Yes</span></button>
                  <button className="btn checker n" type="button"><span>No</span></button>
              </div>
            </div>
            <Modal
                classNames={{overlay: 'custom-overlay', modal: 'custom-modal'}}
                open={this.state.open}
                onClose={this.onCloseModal}>
              <h2>Select kind of pollen in this list</h2>
              {this.state.pollenList.map((pollen, i) => {
                    return (
                    <Router>
                        <div className="pollen-chooser" key={i}>
                            <div className="card type-pollen-card">
                                <div className="pollen-card" onClick={(e) => this.openPollenTypeDasboard(pollen.name, e)}>
                                    <img className="pollen-img" alt={pollen.name} src={pollen.image}/>
                                    <Link to="/dashboard">{pollen.name}</Link>
                                </div>
                            </div>
                            <Route path="/dashboard" component={Dashboard} />
                        </div>
                    </Router>
                    )
                })}
            </Modal>
        </div>
      );
    }
}

export default PollenChooser;
