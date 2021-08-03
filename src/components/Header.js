import './styles/Header.css';
import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import LogInButton from "./LogInButton";
import SignUpButton from "./SignUpButton";

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <Logo />
                <SearchBar />
                <LogInButton />
                <SignUpButton />
            </header>
        );
    }
}

export default Header;
