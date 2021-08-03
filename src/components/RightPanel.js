import './styles/RightPanel.css';
import React from "react";

class RightPanel extends React.Component {
    render() {
        return (
            <div className="right-panel">
                <div className="select-section">
                    <h3 style={{marginTop: '7%'}}>Filter</h3>
                    <select name="filter" className="filter">
                        <option value="date">Date</option>
                        <option value="username">Author</option>
                        <option value="tags">Tags</option>
                    </select>
                </div>

            </div>
        );
    }
}

export default RightPanel;