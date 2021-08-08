import React from "react";
import './styles/AddPostPanel.css';

class AddPostPanel extends React.Component {
    render() {
        return(
            <div className="add-post-panel">
                <h3 className="panel-header">Main</h3>
                <button type="button" className="btn btn-light add-post-btn">
                    Add post
                </button>
            </div>
        );
    }
}

export default AddPostPanel;
