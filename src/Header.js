import './Header.css';
import React from "react";
import { Button } from 'antd';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                {/*<div id="logo-id" className="logo">SNPT</div>
                <input id="search-bar-id" className="search-bar"/>*/}
                <Logo />
                <SearchBar />
                <LogInButton />
                <SignUpButton />
            </header>

        );
    }
}

class Logo extends React.Component{
    render() {
        return (
            <div id="logo-id" className="logo">SNPT</div>
        );
    }
}

class SearchBar extends React.Component {
    render() {
        return (
            <input id="search-bar-id" className="search-bar" placeholder="Search..."/>
        );
    }
}

class LogInButton extends React.Component {
    render() {
        return (
          <Button className="log-in-button">Log in</Button>
        );
    }
}

class SignUpButton extends React.Component {
    render() {
        return (
            <Button type="primary" className="sign-up-button">Sign up</Button>
        )
    }
}

/*function SearchInput(props) {
    return (
        <input className="SearchBar"></input>
    );
}*/

export default Header;
export {Logo};
