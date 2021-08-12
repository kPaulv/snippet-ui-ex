import "./styles/PopularLanguages.css";
import React from "react";

class PopularLanguages extends React.Component {
    render() {
        return (
            <div className="popular-languages">
                <h3>Popular languages</h3>
                <div className="popular-language-block">
                    <a href="" className="popular-language">JavaScript</a>
                </div>
                <div className="popular-language-block">
                    <a href="" className="popular-language">Java</a>
                </div>
                <div className="popular-language-block">
                    <a href="" className="popular-language">Python</a>
                </div>
                <div className="popular-language-block">
                    <a href="" className="popular-language">C#</a>
                </div>
                <div className="popular-language-block">
                    <a href="" className="popular-language">C++</a>
                </div>
                <div className="popular-language-block">
                    <a href="" className="popular-language">SQL</a>
                </div>
                <div className="popular-language-block">
                    <a href="" className="popular-language">TypeScript</a>
                </div>
                <div className="popular-language-block">
                    <a href="" className="popular-language">C</a>
                </div>
                <div className="popular-language-block">
                    <a href="" className="popular-language">Ruby</a>
                </div>
                <div className="popular-language-block">
                    <a href="" className="popular-language">Haskell</a>
                </div>
            </div>
        );
    }
}

export default PopularLanguages;
