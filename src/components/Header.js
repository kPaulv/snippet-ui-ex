import './styles/Header.css';
import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import LogInButton from "./LogInButton";
import SignUpButton from "./SignUpButton";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''
        };
    }

    receiveSearchTerm = (value) => {
        this.setState({searchTerm: value});
        this.props.sendSearchTerm(value);
    }

    render() {
        return (
            <header className="header">
                <Logo />
                <SearchBar sendSearchTerm={this.receiveSearchTerm}/>
                <LogInButton />
                <SignUpButton />
            </header>
        );
    }
}

export default Header;
