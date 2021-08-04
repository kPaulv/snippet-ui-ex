import './styles/RightPanel.css';
import React from "react";
import PopularLanguages from "./PopularLanguages";
import PostSorter from "./PostSorter";

class RightPanel extends React.Component {
    render() {
        return (
            <div className="right-panel">
                <PostSorter/>
                <PopularLanguages/>
            </div>
        );
    }
}

export default RightPanel;