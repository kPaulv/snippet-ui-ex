import React from "react";
import "../styles/SearchBar.css"

class SearchBar extends React.Component {
    render() {
        return (
            <input id="search-bar-id" className="search-bar" placeholder="Search..."/>
        );
    }
}

export default SearchBar;
