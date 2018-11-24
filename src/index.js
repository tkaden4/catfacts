import React from "react";
import ReactDOM from "react-dom";

import "./index.sass";
import Index from "./components/Index";
import facts from "../facts/facts.json";

const elem_id = "react-app";
const el = document.getElementById(elem_id);

if (!el) {
    throw new Error(`Element ${elem_id} not defined. Unable to initialize application.`)
}

ReactDOM.render(<Index fact={ facts[Math.floor(Math.random() * facts.length)] }/>, el)
