import React from "react";
import {Button} from "react-bootstrap";
import "./styles/LogInButton.css"

class LogInButton extends React.Component {
    render() {
        return (
            <Button variant="light" className="log-in-button">Log in</Button>
        );
    }
}

export default LogInButton;
