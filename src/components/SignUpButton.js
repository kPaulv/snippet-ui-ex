import React from "react";
import {Button} from "react-bootstrap";
import "./styles/SignUpButton.css";
import SignInForm from "./SignInForm";

class SignUpButton extends React.Component {
    state = {
        seen: false
    };

    togglePopUp = () => {
        //debugger;
        this.setState({
            seen: !this.state.seen
        });
    };

    render() {
        return (
            <div className="sign-up-button-block">
                <Button variant="light" id="signUp" className="sign-up-button" onClick={this.togglePopUp}>
                    Sign up
                </Button>
                {this.state.seen ? <SignInForm toggle={this.togglePopUp} isVisible={true}
                                               formName={"Sign up"} form/> : null}
            </div>
        )
    }
}

export default SignUpButton;
