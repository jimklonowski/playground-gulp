"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
function showHello(divName, name) {
    var elem = document.getElementById(divName);
    elem.innerText = greet_1.sayHello(name);
}
showHello("greeting", "TypeScript");
