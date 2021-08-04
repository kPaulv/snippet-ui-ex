import './styles/LeftPanel.css';
import React from "react";
import PopularTags from "./PopularTags";

class LeftPanel extends React.Component {
    render() {
        return (
            <div className="left-panel">
                <PopularTags/>
            </div>
        );
    }
}

export default LeftPanel;
