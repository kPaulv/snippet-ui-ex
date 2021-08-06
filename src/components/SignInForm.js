import React from "react";
import "./styles/SignInForm.css";
import "react-bootstrap";
import {CloseButton} from "react-bootstrap";

class SignInForm extends React.Component {
    handleClick = () => {
        this.props.toggle();
    }

    render() {
        return (
            /*<div className="modal" /!*style={{display: 'block'}}*!/>
                <div className="modal_content">
                    <span className="close" onClick={this.handleClick}>
                        &times;
                    </span>
                    <form>
                        <h3>Register!</h3>
                        <label>
                            Name:
                            <input type="text" name="name"/>
                        </label>
                        <br/>
                        <input type="submit"/>
                    </form>
                </div>
            </div>*/
            <form className="sign-in-form">
                <div className="sign-in-form-header">
                    <h4 style={{marginLeft: '5%', marginTop: '2%'}}>Sign in</h4>
                    {/*<span className="close" onClick={this.handleClick}>
                        &times;
                    </span>*/}
                    {/*<button type="button" className="btn-close form-close" aria-label="Close"
                        onClick={this.handleClick}>
                        x
                    </button>*/}
                    <CloseButton className="form-close-button" onClick={this.handleClick}/>
                </div>

                <input type="text" id="inputUsername" className="form-control"
                       placeholder="Username" required autoFocus/>
                <input type="password" id="inputPassword" className="form-control"
                       placeholder="Password" required />
                <button className="btn btn-primary form-control" type="button">
                    Submit
                </button>
            </form>
        );
    }
}

export default SignInForm;
