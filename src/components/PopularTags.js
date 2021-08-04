import "./styles/PopularTags.css";
import "react-bootstrap";
import React from "react";

class PopularTags extends React.Component {
    render() {
        return(
            <div className="card" style={{width: '18rem'}}>
                <div className="card-header">
                    <h4>Popular tags</h4>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Algorithms</li>
                    <li className="list-group-item">Data structures</li>
                    <li className="list-group-item">OS kernel</li>
                </ul>
            </div>
        );
    }
}

export default PopularTags;
