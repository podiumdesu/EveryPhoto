"use strict";

webpackJsonp([1], [,,,
/* 0 */
/* 1 */
/* 2 */
/* 3 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    exports.default = function (targetNode) {
        while (targetNode.children().length > 0) {
            targetNode.empty();
        }
    };

    /***/
},,,,,,
/* 4 */
/* 5 */
/* 6 */
/* 7 */
/* 8 */
/* 9 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    var _libData = __webpack_require__(10);

    var _renderLIB = __webpack_require__(11);

    var _renderLIB2 = _interopRequireDefault(_renderLIB);

    var _clear = __webpack_require__(3);

    var _clear2 = _interopRequireDefault(_clear);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    console.log("This is myGallery.js");
    console.log("dd");
    __webpack_require__(1);
    __webpack_require__(2);
    __webpack_require__(12);

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

    /***/
},
/* 10 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    /**
     * Created by petnakanojo on 31/07/2017.
     */
    var libData = exports.libData = [];

    /***/
},
/* 11 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    exports.default = function (element, index) {
        var targetNode = $("#gallery-container");
        var div = document.createElement("div");
        div.setAttribute("data-id", index);
        div.className += 'ga-bar';
        div.innerHTML = "\n        <p class=\"lib-name\">" + element.name + "</p>\n        <p class=\"lib-path\">" + element.path + "</p>\n    ";
        targetNode.prepend(div);
    };

    /***/
},
/* 12 */
/***/function (module, exports) {

    // removed by extract-text-webpack-plugin

    /***/}], [9]);
//# sourceMappingURL=myGallerybundle.js.map