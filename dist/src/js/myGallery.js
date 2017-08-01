"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.searchPath = undefined;

var _libData = require("./MG/libData");

var _renderLIB = require("./MG/renderLIB");

var _renderLIB2 = _interopRequireDefault(_renderLIB);

var _clear = require("./clear");

var _clear2 = _interopRequireDefault(_clear);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("This is myGallery.js");
console.log("dd");
require('../styles/common/common.css');
require('../styles/common/nav-container.css');
require('../styles/MG/inputInfo.css');
var searchPath = exports.searchPath = void 0;
exports.searchPath = searchPath = "";

//searchPath = "/Users/petnakanojo/Documents/img";    //这是一个假数据


var targetNode = $("#gallery-container");
var storedLIBData = void 0;
var divContainer = document.createElement("div");
divContainer.setAttribute("id", "addNewBar-container");
divContainer.className += "ga-bar";
divContainer.innerHTML = "\n        <p>\u6DFB\u52A0\u65B0\u56FE\u5E93</p>\n        <div id=\"addNewBar\">\n        <p>+</p>\n        </div>\n    ";

storedLIBData = JSON.parse(localStorage.getItem("LIB"));
if (storedLIBData.length > 0) {
    (0, _clear2.default)(targetNode);
    storedLIBData.forEach(_renderLIB2.default);
}
targetNode.append(divContainer);

$("#addNewBar").live("click", function () {
    console.log("ddd");
    $(".ga-bar").addClass("blur-display");
    $("#inputInfo").fadeIn(200);
});

/*这是一个没用的监听事件
let searchBar = $("#pathValue");
searchBar.bind("keyup",function(event) {    //监听回车事件
    let pathVal = $("#pathValue").val();
    var searchInfo = searchBar.val();
    var event = event || window.event;
    if (event.keyCode === 13) {
        if (searchInfo.length !== 0) {
            if(pathVal.length > 0) {
                localStorage["LIB"].forEach(renderLIB);
            }
            $("#inputInfo").fadeOut(200,function() {
                $(".ga-bar").removeClass("blur-display");
                $("#pathValue").val("");
                $("#nameValue").val("");
            });
        } else {
        }
    }
},false);
*/

//使用localstorage
$(".choose-path").live("click", function () {});

$("#btn-addNewInfo").click(function () {
    var newLIB = {};
    newLIB.name = $("#nameValue").val();
    newLIB.path = $("#pathValue").val();

    if (newLIB.path.length > 0) {
        console.log("It works");
        (0, _clear2.default)(targetNode);

        storedLIBData = JSON.parse(localStorage.getItem("LIB"));
        console.log("d");
        storedLIBData.push(newLIB);
        console.log("dd");
        localStorage.setItem("LIB", JSON.stringify(storedLIBData));
        console.log("ddd");
        storedLIBData = JSON.parse(localStorage.getItem("LIB"));
        console.log("dddd");
        console.log(storedLIBData);

        storedLIBData.forEach(_renderLIB2.default);
        targetNode.append(divContainer);

        $("#inputInfo").fadeOut(200, function () {
            $(".ga-bar").removeClass("blur-display");
            $("#pathValue").val("");
        });
    }
    alert("ok");
});

$("#btn-cancel").click(function () {
    $("#inputInfo").fadeOut(200, function () {
        $(".ga-bar").removeClass("blur-display");
        $("#pathValue").val("");
    });
});
//# sourceMappingURL=myGallery.js.map