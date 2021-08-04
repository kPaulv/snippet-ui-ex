import './styles/FeedPanel.css';
import React from "react";
import Post from "./Post";
import AddPost from "./AddPost";

class FeedPanel extends React.Component {
    render() {
        return (
            <div className="feed-panel">

                <AddPost/>

                <Post/>
                <Post/>
                <Post/>
                <Post/>

            </div>
        );
    }
}

export default FeedPanel;
