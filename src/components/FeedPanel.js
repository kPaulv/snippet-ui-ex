import '../styles/FeedPanel.css';
import React from "react";
import {Button} from 'antd';
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
                    <Button type="primary" className="add-post-button">
                        Add post
                    </Button>
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
