import React, { Component, Fragment } from 'react';
import Particles from 'react-particles-js';
import ContactForm from './contact';
import params from '../config/particle.js';
import '../scss/App.scss';

export default class App extends Component {
    state = {
        isOpen: false
    }

    handleOpen = () => this.setState({ isOpen: true });
    handleClose = () => this.setState({ isOpen: false });

    render() {
        return (
            <Fragment>
                <ContactForm
                    isOpen={this.state.isOpen}
                    handleClose={this.handleClose}
                />

                <div className="App">
                    <Particles params={params}/>
                    <header className="App-header">
                        <h1>bradprints</h1>
                        <div style={{marginBottom: '10px'}}>Contact me</div>
                        <div className="links">
                            <a href="https://www.instagram.com/bradprints/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                            <i
                                className="far fa-envelope"
                                onClick={this.handleOpen}
                            ></i>
                        </div>
                    </header>
                </div>
            </Fragment>
        )
    }
}
