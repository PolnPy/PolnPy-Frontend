import React, { Component } from 'react';
import './App.css';
import Modal from 'react-responsive-modal';
import './custom-modal.css';

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
              <h2>Pollen's List</h2>
              {this.state.pollenList.map((pollen, i) => {
                    return (
                        <div key={i}>
                            <div className="card type-pollen-card">
                                <p>{pollen.name}</p>
                            </div>
                        </div>
                    )
                })}
            </Modal>
        </div>
      );
    }
}

export default PollenChooser;
