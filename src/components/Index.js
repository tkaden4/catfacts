import React from "react";

import "./Index.scss";

import logo from "../../assets/logo.svg";

export const Index = ({ fact }) =>
    <div className="index">
        <div className="content">
            <div className="title">
                <img src={logo} />
                Catfacts
            </div>
            <div className="fact">
                {fact}
            </div>
            <div className="buttons">
                <button value="refresh" onClick={() => location.reload()}>refresh</button>
            </div>
        </div>
    </div>;

export default Index;
