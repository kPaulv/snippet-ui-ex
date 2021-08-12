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
            <form className="search-bar-form" autoComplete={"off"} onSubmit={(e) => {
                this.props.sendSearchTerm(this.state.searchTerm);
                e.preventDefault();
            }}>
            <input
                type="text"
                autoComplete={"new-password"}
                id="search-bar-id"
                className="search-bar"
                placeholder="Search..."
                onInput={(event) => {
                    this.setState({searchTerm: event.target.value});
                }}
            />
            {/*<div style={{display: 'none'}}><button type={"submit"} /></div>*/}
            </form>
        );
    }
}

export default SearchBar;
