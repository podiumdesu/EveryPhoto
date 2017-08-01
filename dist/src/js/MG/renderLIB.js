"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (element, index) {
    var targetNode = $("#gallery-container");
    var div = document.createElement("div");
    div.setAttribute("data-id", index);
    div.className += 'ga-bar';
    div.innerHTML = "\n        <div class=\"choose-path\">\n            <p>YES</p>\n        </div>\n        <p class=\"lib-name\">" + element.name + "</p>\n        <p class=\"lib-path\">" + element.path + "</p>\n    ";
    targetNode.prepend(div);
};
//# sourceMappingURL=renderLIB.js.map