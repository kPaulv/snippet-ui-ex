import './styles/App.css';
import React, {useState} from 'react';
import Header from "./Header";
import LeftPanel from "./LeftPanel";
import FeedPanel from "./FeedPanel";
import RightPanel from "./RightPanel";

function App() {
    const[searchTerm, setSearchTerm] = useState('');

    function receiveSearchTerm(value) {
        setSearchTerm(value);
    }

    return (<React.Fragment>
            <Header sendSearchTerm={receiveSearchTerm}/>
            <div className="PanelSpace">
                <LeftPanel/>
                <FeedPanel searchTerm={searchTerm}/>
                <RightPanel/>
            </div>
        </React.Fragment>
    );
}

export default App;
