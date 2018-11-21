import React from "react";

import "./Index.scss";

import logo from "../../assets/logo.svg";

export const Index = ({ }) =>
    <div className="index">
        <div className="content">
            <div className="title">
                <img src={logo} />
                Catfacts
            </div>
            <form>
                <textarea placeholder="Enter facts here..."></textarea>
                <div className="buttons">
                    <button value="start">start</button>
                    <button value="stop">stop</button>
                </div>
            </form>
            <div className="">

            </div>
        </div>
    </div>;

export default Index;
