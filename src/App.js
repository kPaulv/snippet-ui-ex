import './App.css';
import React from 'react';
import Header from "./Header";
import LeftPanel from "./LeftPanel";
import FeedPanel from "./FeedPanel";
import RightPanel from "./RightPanel";

function App() {
    return (
        <React.StrictMode>
            <Header/>
            <div className="PanelSpace">
                <LeftPanel/>
                <FeedPanel/>
                <RightPanel/>
            </div>
        </React.StrictMode>
    );
}

export default App;
