import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

import * as testModule from 'sk_module_template' 

console.log(testModule.default.foo())

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);