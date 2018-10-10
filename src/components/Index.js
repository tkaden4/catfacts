import React from "react";

import "./Index.scss";

export const Index = ({ }) =>
    <div className="index">
        <div className="content">
            <div className="title">
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