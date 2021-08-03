import './styles/LeftPanel.css';
import React from "react";
import { Button } from 'antd';

class LeftPanel extends React.Component {
    render() {
        return (
            <div className="left-panel">
                <div className="button-section">
                    <Button type="text" className="section-btn home-button">Home</Button>
                    <Button type="text" className="section-btn">Main</Button>
                    <Button type="text" className="section-btn">Users</Button>
                    <Button type="text" className="section-btn">Tags</Button>
                </div>

            </div>
        );
    }
}

export default LeftPanel;
