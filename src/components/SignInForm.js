import React from "react";
import "./styles/SignInForm.css";
import "react-bootstrap";
//import { Modal } from 'antd';
import {CloseButton} from "react-bootstrap";

class SignInForm extends React.Component {
    state = {
        isModalVisible: this.props.isVisible
    };

    handleClick = () => {
        this.props.toggle();
    }

    showModal = () => {
        this.setState({
            isModalVisible: !this.state.isModalVisible
        });
    };

    handleOk = () => {
        this.setState({
            isModalVisible: !this.state.isModalVisible
        });
    };

    handleCancel = () => {
        this.setState({
            isModalVisible: !this.state.isModalVisible
        });
    };

    render() {
        return (
            /*<Modal title="Sign up" visible={this.state.isModalVisible} onOk={this.handleOk}
                   onCancel={this.handleCancel}>
                <input type="text" id="inputUsername" className="form-control"
                       placeholder="Username" required autoFocus/>
                <input type="password" id="inputPassword" className="form-control"
                       placeholder="Password" required />
            </Modal>*/
            <form className="sign-in-form">
                <div className="sign-in-form-header">
                    <h4 className="form-name">{this.props.formName}</h4>
                    <CloseButton className="form-close-button" onClick={this.handleClick}/>
                </div>

                <input type="text" id="inputUsername" className="form-control"
                       placeholder="Username" required autoFocus/>
                <input type="password" id="inputPassword" className="form-control"
                       placeholder="Password" required />
                <button className="btn btn-primary form-control" type="button" onClick={this.handleClick}>
                    Submit
                </button>
            </form>
        );
    }
}

export default SignInForm;
