import React, { Component, Fragment } from 'react';
import Particles from 'react-particles-js';
import ContactForm from './contact';
import '../scss/App.scss';

const params = {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 2500
            }
        },
        "line_linked": {
            "enable": true,
            "opacity": 0.04
        },
        "move": {
            "direction": "right",
            "speed": 0.05
        },
        "size": {
            "value": 1
        },
        "opacity": {
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.05
            }
        }
    },
    "interactivity": {
        "events": {
            "onclick": {
                "enable": true,
                "mode": "push"
            }
        },
        "modes": {
            "push": {
                "particles_nb": 1
            }
        }
    },
    "retina_detect": true
}

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
