import './styles/FeedPanel.css';
import React from "react";
import Post from "./Post";

class FeedPanel extends React.Component {
    render() {
        return (
            <div className="feed-panel">

                <div className="add-post-panel">
                    <h3 style={{
                        marginTop: '10px',
                        marginLeft: '2%',
                    }}>Main</h3>
                    <button type="button" className="btn btn-light add-post-btn">
                        Add post
                    </button>
                </div>

                <Post/>
                <Post/>
                <Post/>
                <Post/>

            </div>
        );
    }
}

export default FeedPanel;
