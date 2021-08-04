import React from "react";
import {Button} from "react-bootstrap";
import "./styles/SignUpButton.css";

class SignUpButton extends React.Component {
    render() {
        return (
            <Button variant="light" className="sign-up-button">Sign up</Button>
        )
    }
}

export default SignUpButton;
