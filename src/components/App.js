import './styles/App.css';
import React, {useState} from 'react';
import Header from "./Header";
import LeftPanel from "./LeftPanel";
import FeedPanel from "./FeedPanel";
import RightPanel from "./RightPanel";

function App() {
    const[searchTerm, setSearchTerm] = useState('');
    const[filterData, setFilterData] = useState({});

    function receiveSearchTerm(value) {
        setSearchTerm(value);
    }

    function receiveFilterData(data) {
        setFilterData(data);
    }

    return (<React.Fragment>
            <Header sendSearchTerm={receiveSearchTerm}/>
            <div className="PanelSpace">
                <LeftPanel sendFilterData={receiveFilterData}/>
                <FeedPanel searchTerm={searchTerm} filterData={filterData}/>
                <RightPanel/>
            </div>
        </React.Fragment>
    );
}

export default App;
