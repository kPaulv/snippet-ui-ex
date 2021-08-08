import React from "react";
import './styles/AddPostPanel.css';
import {Link} from "react-router-dom";

class AddPostPanel extends React.Component {
    render() {
        return(
            <div className="add-post-panel">
                <h3 className="panel-header">Main</h3>
                {/*<Link to="/signup" className="btn btn-primary">Sign up</Link>*/}
                <Link className="btn btn-light add-post-btn" to='/create'>
                    Create post
                </Link>
            </div>
        );
    }
}

export default AddPostPanel;
