import './styles/FeedPanel.css';
import React from "react";
import AddPostPanel from "./AddPostPanel";
import Post from "./Post";

class FeedPanel extends React.Component {
    render() {
        return (
            <div className="feed-panel">
                <AddPostPanel/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        );
    }
}

export default FeedPanel;
