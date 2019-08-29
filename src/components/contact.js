import React, { Component } from 'react';
import axios from 'axios';
import { Dialog, Classes, InputGroup, TextArea, Toaster, Intent, Position } from "@blueprintjs/core";

const AppToaster = Toaster.create({
    position: Position.TOP
});

export default class ContactForm extends Component {
    state = {
        name: "",
        email: "",
        message: "",
        sent: false,
        buttonIcon: "fas fa-paper-plane"
    }
    
    handleFormSubmit = (e) => {
        if (this.state.name && this.state.email && this.state.message && !this.state.sent) {
			axios.post("https://tinymailer.herokuapp.com/api/mail", {
				name: this.state.name,
				email: this.state.email,
				message: this.state.message,
		    },{
		    	headers: {"Accept": "application/json"}
		    })
		    .then((response) => {
		    	console.log(response);
		    	if (response.status === 200) {
		    		this.showToast("Message sent!", Intent.SUCCESS);
		    		this.setState({ buttonIcon: "fas fa-check-circle", sent: true });
                    this.props.handleClose();
		    	}
		    })
		    .catch((error) => {
		    	console.log(error);
		    	this.showToast("There was an issue.", Intent.DANGER);
		    });
		} else {
			this.showToast("Please complete all the fields and try again.", Intent.DANGER);
		}
	    e.preventDefault();
    }
    
    handleFields = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    showToast = (message, intent) => {
		AppToaster.show({
			message: message,
			intent: intent,
			timeout: 3000
		})
	}
    
    render() {
        let buttonClass;
		if (this.state.name && this.state.email && this.state.message.length > 5) {
			buttonClass = "submit-button";
			if (this.state.sent) {
				buttonClass = "submit-button sent disabled";
			}
		} else {
			buttonClass = "submit-button disabled";
		}
        
        return(
            <Dialog
                title="Contact Me"
                onClose={this.props.handleClose}
                {...this.props}
            >
                <div className={Classes.DIALOG_BODY}>
                    <p style={{fontSize: '18px', lineHeight: '1.5em'}}>Please feel free to reach out to me regarding any inquiries!</p>
                    <form onSubmit={this.handleFormSubmit}>
                        <InputGroup
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Name"
                            large="true"
                            fill="true"
                            rounded="true"
                            onChange={this.handleFields}
                        />
                        
                        <InputGroup
    						id="email"
    						name="email"
    						type="email"
    						placeholder="Email Address"
    						large="true"
    						fill="true"
    						rounded="true"
    						onChange={this.handleFields}
    					/>
                        
                        <TextArea
    						id="message"
    						name="message"
    						placeholder="Write a message"
    						fill="true"
    						large="true"
    						rounded="true"
    						onChange={this.handleFields}
    					/>
                        
                        <button
    						className={buttonClass}
    						type="submit"
    					>Submit<span> <i className={this.state.buttonIcon}></i></span></button>
                        
                    </form>
                </div>
            </Dialog>
        )
    }
}