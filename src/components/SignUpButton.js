import React from "react";
import {Button} from "react-bootstrap";
import "./styles/SignUpButton.css";
import SignInForm from "./SignInForm";

class SignUpButton extends React.Component {
    state = {
        seen: false
    };

    togglePopUp = () => {
        /*alert("togglePopUp");*/
        this.setState({
            seen: !this.state.seen
        });
    };

    render() {
        return (
            <div className="sign-up-button-block" onClick={this.togglePopUp}>
                <Button variant="light" id="signUp" className="sign-up-button">
                    Sign up
                </Button>
                {this.state.seen ? <SignInForm toggle={this.togglePopUp}/> : null}
            </div>
        )
    }
}

export default SignUpButton;
