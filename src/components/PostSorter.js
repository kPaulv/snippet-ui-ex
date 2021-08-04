import "./styles/PostSorter.css"
import React from "react";

class PostSorter extends React.Component {
    render() {
        return (
            <div className="select-section">
                <h3 style={{marginTop: '7%'}}>Sort</h3>
                <select name="sort" className="sort">
                    <option value="date">Date</option>
                    <option value="username">Popularity</option>
                </select>
            </div>
        );
    }
}

export default PostSorter;
