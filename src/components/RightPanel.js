import './styles/RightPanel.css';
import React from "react";

class RightPanel extends React.Component {
    render() {
        return (
            <div className="right-panel">
                <div className="select-section">
                    <h3 style={{marginTop: '7%'}}>Sort</h3>
                    <select name="filter" className="filter">
                        <option value="date">Date</option>
                        <option value="username">Popularity</option>
                    </select>
                </div>

            </div>
        );
    }
}

export default RightPanel;