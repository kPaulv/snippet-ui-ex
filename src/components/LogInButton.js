import React from "react";
import {Button} from "react-bootstrap";
import "./styles/LogInButton.css"
import SignInForm from "./SignInForm";

class LogInButton extends React.Component {
    state = {
        seen: false
    };

    togglePopUp = () => {
        this.setState({
            seen: !this.state.seen
        });
    };

    render() {
        return (
            <>
                <Button variant="light" className="log-in-button" onClick={this.togglePopUp}>
                    Log in
                </Button>
                {this.state.seen ? <SignInForm toggle={this.togglePopUp} isVisible={true}
                                               formName={"Log in"} form/> : null}
            </>
        );
    }
}

export default LogInButton;
