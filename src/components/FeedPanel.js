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

        /*let url;
        console.log("search req check mount: " + this.props.searchTerm);
        if (this.props.searchTerm !== "" && this.props.searchTerm !== null && this.props.searchTerm !== undefined) {
            url = `https://localhost:44384/Post?SearchingText=${this.props.searchTerm}&Count=${defCount}&Skip=${defSkip}`;
        } else {
            url = `https://localhost:44384/Post?Count=${defCount}&Skip=${defSkip}`;
        }*/

        axios.get(`https://localhost:44384/Post?Count=${defCount/*this.state.count*/}&Skip=${defSkip/*this.state.skip*/}`)
            //axios.get(url)
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.searchTerm !== this.props.searchTerm) {
            let url;

            console.log("search req check: " + this.props.searchTerm);
            if (this.props.searchTerm !== "" && this.props.searchTerm !== null && this.props.searchTerm !== undefined) {
                url = `https://localhost:44384/Post?SearchingText=${this.props.searchTerm}&Count=${10}&Skip=${0}`;
            } else {
                url = `https://localhost:44384/Post?Count=${10}&Skip=${0}`;
            }

            axios.get(url)
                .then(response => {
                    this.setState({currentPosts: response.data});
                })
                .catch(error => {
                    console.log(error)
                });
            /*} else if (prevProps.searchTerm === this.props.searchTerm && prevProps.filterData !== this.props.filterData) {
                if (this.props.filterData !== [] && this.props.filterData !== null && this.props.filterData !== undefined) {
                    //url = `https://localhost:44384/Post?`;
                    debugger;
                    url = `https://localhost:44384/Post?From=${(this.props.filterData.dates[0]).toISOString()}` +
                        `&To=${(this.props.filterData.dates[1]).toISOString()}&Tags=`;
                    if(this.props.filterData.tags.length > 0) {
                        for (let i = 0; i < this.props.filterData.tags.length - 1; ++i) {
                            url.concat(this.props.filterData.tags[i], '&Tags=')
                        }
                        url.concat(this.props.tags[this.props.filterData.tags.length - 1]);
                    }
                    url.concat('&Languages=');
                    if(this.props.filterData.checkedLanguages.length > 0) {
                        for (let i = 0; i < this.props.filterData.checkedLanguages.length - 1; ++i) {
                            url.concat(this.props.filterData.checkedLanguages[i], '&Languages=')
                        }
                        url.concat(this.props.filterData.checkedLanguages[this.props.filterData.checkedLanguages.length - 1]);
                    }
                    url.concat(`&Count=${10}&Skip=${0}`)
                    //Tags=string&Languages=1&Languages=2&Count=30`
                } else {
                    url = `https://localhost:44384/Post?Count=${10}&Skip=${0}`;
                }
            } else if (prevProps.searchTerm !== this.props.searchTerm && prevProps.filterData !== this.props.filterData) {
                //https://localhost:44384/Post?From=2021-08-10&To=2021-08-11&Tags=string&Tags=string1&Languages=1&Languages=2&SearchingText=search&Count=30
                if (this.props.filterData !== [] && this.props.filterData !== null && this.props.filterData !== undefined) {
                    url = `https://localhost:44384/Post?From=${(this.props.filterData.dates[0]).toISOString()}` +
                        `&To=${(this.props.filterData.dates[1]).toISOString()}&Tags=`;
                    if(this.props.filterData.tags.length > 0) {
                        for (let i = 0; i < this.props.filterData.tags.length - 1; ++i) {
                            url.concat(this.props.filterData.tags[i], '&Tags=')
                        }
                        url.concat(this.props.filterData.tags[this.props.filterData.tags.length - 1]);
                    }
                    url.concat('&Languages=');
                    if(this.props.filterData.checkedLanguages.length > 0) {
                        for (let i = 0; i < this.props.filterData.checkedLanguages.length - 1; ++i) {
                            url.concat(this.props.filterData.checkedLanguages[i], '&Languages=')
                        }
                        url.concat(this.props.filterData.checkedLanguages[this.props.filterData.checkedLanguages.length - 1]);
                    }
                    url.concat('&');
                } else {
                    url = `https://localhost:44384/Post?`;
                }

                if(this.props.searchTerm !== "" && this.props.searchTerm !== null && this.props.searchTerm !== undefined){
                    url.concat(`SearchingText=${this.props.searchTerm}&Count=${10}&Skip=${0}`)
                } else {
                    url.concat(`Count=${10}&Skip=${0}`);
                }


                /!*axios.get(url)
                    .then(response => {
                        this.setState({currentPosts: response.data});
                    })
                    .catch(error => {
                        console.log(error)
                    });*!/
            }

            console.log('check url: ' + url)
            axios.get(url)
                .then(response => {
                    this.setState({currentPosts: response.data});
                })
                .catch(error => {
                    console.log(error)
                });*/
        }
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
                    currentPosts ?
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
                        null : null
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
