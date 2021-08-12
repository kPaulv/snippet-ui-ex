import React from "react";
import "./styles/SearchBar.css"

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''
        };
    }

    render() {
        return (
            <input
                type="text"
                id="search-bar-id"
                className="search-bar"
                placeholder="Search..."
                onChange={(event) => {
                    this.setState({searchTerm: event.target.value});
                    this.props.sendSearchTerm(event.target.value);
                }}
            />
        );
    }
}

export default SearchBar;
