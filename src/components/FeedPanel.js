import './styles/FeedPanel.css';
import React from "react";
import AddPostPanel from "./AddPostPanel";
import Post from "./Post";
import Pagination from "./Pagination";
import axios from "axios";

class FeedPanel extends React.Component {
    /*constructor(props) {
        super(props);

        /!*this.state = {
            posts: [],
            skip: 0,
            count: 10
        }*!/
    }*/

    state = {totalPosts: null, currentPosts: [], currentPage: null, totalPages: null};

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
        const defSkip = 0;
        const defCount = 10;
        axios.get(`https://localhost:44384/Post?Count=${defCount/*this.state.count*/}&Skip=${defSkip/*this.state.skip*/}`)
            .then(response => {
                console.log(response)
                this.setState({
                    /*posts: response.data,
                    skip: this.state.skip + 10,
                    count: 10*/
                    currentPosts: response.data
                })

                console.log("setState check");
                console.log(this.state.currentPosts);
                console.log(this.state.currentPosts[0].id);
            })
            .catch(error => {
                console.log(error)
            })

        axios.get('https://localhost:44384/Post/Count')
            .then(response => {
                console.log(response);
                this.setState({totalPosts: response.data});
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

    onPageChanged = (data) => {
        const {currentPage, totalPages, pageLimit} = data;
        const offset = (currentPage - 1) * pageLimit;
        let url;

        console.log("search req check: " + this.props.searchTerm);
        if (this.props.searchTerm !== "" && this.props.searchTerm !== null && this.props.searchTerm !== undefined) {
            url = `https://localhost:44384/Post?SearchingText=${this.props.searchTerm}&Count=${pageLimit}&Skip=${offset}`;
        } else {
            url = `https://localhost:44384/Post?Count=${pageLimit}&Skip=${offset}`;
        }

        axios.get(url)
            .then(response => {
                const currentPosts = response.data;
                this.setState({currentPage, currentPosts, totalPages});
            })
            .catch(error => {
                console.log(error)
            });
        /*const currentPosts = allCountries.slice(offset, offset + pageLimit);

        this.setState({ currentPage, currentCountries, totalPages });*/
    }

    render() {
        //const { posts } = this.state.posts;
        const {totalPosts, currentPosts} = this.state

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
                    currentPosts.length ?
                        currentPosts/*.filter((value) => {
                            if(this.props.searchTerm === '') {
                                return value;
                            } else if (value.tittle.toLowerCase().includes(this.props.searchTerm.toLowerCase())) {
                                return value;
                            }
                        })*/.map(post => <Post
                            key={post.id}
                            name={post.tittle}
                            text={post.description}
                            tags={post.tags}
                            code={post.snippetCode}
                            language={post.language.name}
                        />/*<div key={post.id}>{post.tittle}</div>*/) :
                        null
                }

                {
                    totalPosts ?
                        <div className="pagination-panel">
                            <Pagination totalRecords={totalPosts} pageLimit={10} pageNeighbours={1}
                                        onPageChanged={this.onPageChanged}/>
                        </div> : null
                }


                {/*<Post />*/}

            </div>
        );
    }
}

export default FeedPanel;
