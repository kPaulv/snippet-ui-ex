import './styles/FeedPanel.css';
import React from "react";
import AddPostPanel from "./AddPostPanel";
import Post from "./Post";
import axios from "axios";

class FeedPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            skip: 0,
            count: 10
        }
    }

    /*
    {
    "id": 1,
    "user": null,
    "language": {
      "id": 1,
      "name": "C++"
    },
    "snippetCode": "string",
    "tittle": "string",
    "description": "string",
    "creationDateTime": "2021-08-10T14:36:34.1598827",
    "lastUpdateDateTime": "2021-08-10T14:36:34.642804",
    "tags": [
      {
        "name": "string"
      }
    ]
  }
     */

     componentDidMount() {
        axios.get(`https://localhost:44384/Post?Count=${this.state.count}&Skip=${this.state.skip}`)
            .then(response => {
                console.log(response)
                this.setState({
                    posts: response.data,
                    skip: this.state.skip + 10,
                    count: 10
                })

                console.log("setState check");
                console.log(this.state.posts);
                console.log(this.state.posts[0].id);
            })
            .catch(error => {
                console.log(error)
            })

         /*axios.get('https://jsonplaceholder.typicode.com/posts')
             .then(response => {
                 console.log(response)
                 this.setState({posts: response.data})
             })
             .catch(error => {
                 console.log(error)
             })*/
    }

    render() {
        //const { posts } = this.state.posts;
        const {posts, skip, count} = this.state

        return (
            <div className="feed-panel">
                <AddPostPanel/>
                {/*<Post/>
                <Post/>
                <Post/>
                <Post/>*/}

                {
                    /*posts ?
                    posts.length ? posts.map(post => <Post title="{post.tittle}" />) : null :
                        null*/
                    posts.length ?
                        posts.map(post => <Post
                            key={post.id}
                            name={post.tittle}
                            text={post.description}
                            tags={post.tags}
                            code={post.snippetCode}
                            language={post.language.name}
                            />/*<div key={post.id}>{post.tittle}</div>*/) :
                        null
                }

                {/*<Post />*/}

            </div>
        );
    }
}

export default FeedPanel;
