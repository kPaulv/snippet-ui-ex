import './styles/LeftPanel.css';
import React from "react";
import PopularTags from "./PopularTags";

class LeftPanel extends React.Component {
    render() {
        return (
            <div className="left-panel">
                {/*<div className="button-section">
                    <Button type="text" className="section-btn home-button">Home</Button>
                    <Button type="text" className="section-btn">Main</Button>
                    <Button type="text" className="section-btn">Users</Button>
                    <Button type="text" className="section-btn">Tags</Button>
                </div>*/}
                <PopularTags/>
            </div>
        );
    }
}

export default LeftPanel;
