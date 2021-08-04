import "./styles/AddPost.css";
import React from "react";
import {Button} from "antd";

class AddPost extends React.Component {
    render() {
        return(
            <div className="add-post-panel">
                <h3 style={{
                    marginTop: '10px',
                    marginLeft: '2%',
                }}>Main</h3>
                <Button type="primary" className="add-post-button">
                    Add post
                </Button>
            </div>
        );
    }
}

export default AddPost;
