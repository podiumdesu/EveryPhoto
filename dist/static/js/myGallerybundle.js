webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.searchPath = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _libData = __webpack_require__(4);

var _renderLIB = __webpack_require__(5);

var _renderLIB2 = _interopRequireDefault(_renderLIB);

var _clear = __webpack_require__(6);

var _clear2 = _interopRequireDefault(_clear);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("This is myGallery.js");
console.log("dd");
__webpack_require__(0);
__webpack_require__(1);
__webpack_require__(7);
var searchPath = exports.searchPath = void 0;
exports.searchPath = searchPath = "";
//searchPath = "/Users/petnakanojo/Documents/img";    //这是一个假数据
//localStorage.setItem("searchPathArray","[]");
var searchPathArray = JSON.parse(localStorage.getItem("searchPathArray"));
exports.searchPath = searchPath = JSON.parse(localStorage.getItem("searchPath"));

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
$(".choose-path").live("click", function () {
    if (JSON.parse(localStorage.getItem("searchPathArray")).indexOf(parseInt($(this).parent(".ga-bar").attr("data-id"))) < 0) {
        console.log($(this).parent(".ga-bar").attr("data-id"));
        console.log("ddd" + JSON.parse(localStorage.getItem("searchPathArray")));
        console.log(JSON.parse(localStorage.getItem("searchPathArray")).indexOf($(this).parent(".ga-bar").attr("data-id")));
        console.log("kkk");
        $(this).parent(".ga-bar").attr("chooseornot", "yes");
        $(this).addClass("choose");

        searchPathArray.push(parseInt($(this).parent(".ga-bar").attr("data-id")));
        localStorage.setItem("searchPathArray", JSON.stringify(searchPathArray));

        console.log(localStorage.getItem("searchPathArray"));
        console.log(searchPathArray);
        console.log($(this).parent().children(".lib-path").html());

        exports.searchPath = searchPath = searchPath.concat(" ", $(this).parent().children(".lib-path").html(), " ");
        localStorage.setItem("searchPath", JSON.stringify(searchPath));

        console.log("afterAdd" + searchPath);
    } else {
        $(this).parent(".ga-bar").attr("chooseornot", "");
        $(this).removeClass("choose");
        var index = searchPathArray.indexOf($(this).parent(".ga-bar").attr("data-id"));
        console.log("searchPathArray" + searchPathArray);
        searchPathArray.splice(index, 1);
        var pathlength = $(this).parent().children(".lib-path").html().length;
        var pathindex = searchPath.indexOf($(this).parent().children(".lib-path").html());
        console.log(typeof searchPath === "undefined" ? "undefined" : _typeof(searchPath));
        console.log(searchPath);
        exports.searchPath = searchPath = searchPath.replace($(this).parent().children(".lib-path").html(), "");
        console.log("afterReplace" + searchPath);
        localStorage.setItem("searchPath", JSON.stringify(searchPath));

        localStorage.setItem("searchPathArray", JSON.stringify(searchPathArray));
        console.log(JSON.parse(localStorage.getItem("searchPathArray")));
        console.log(searchPathArray);
    }
});

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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by petnakanojo on 31/07/2017.
 */
var libData = exports.libData = [];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (element, index) {
    var targetNode = $("#gallery-container");
    var div = document.createElement("div");
    div.setAttribute("data-id", index);
    div.className += ' ga-bar ';
    div.setAttribute("chooseornot", "");

    var searchPathArray = JSON.parse(localStorage.getItem("searchPathArray"));
    if (searchPathArray.indexOf(parseInt(index)) >= 0) {
        console.log("YESSSSSSS!!");
        div.setAttribute("chooseornot", "yes");
        div.innerHTML = "\n        <div class=\"choose-path choose\" >\n            <p>YES</p>\n        </div>\n        <p class=\"lib-name\">" + element.name + "</p>\n        <p class=\"lib-path\">" + element.path + "</p>\n    ";
    } else {
        div.innerHTML = "\n        <div class=\"choose-path\" >\n            <p>YES</p>\n        </div>\n        <p class=\"lib-name\">" + element.name + "</p>\n        <p class=\"lib-path\">" + element.path + "</p>\n    ";
    }
    targetNode.prepend(div);
};

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[3]);