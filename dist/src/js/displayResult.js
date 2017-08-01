"use strict";

var _clear = require("./clear");

var _clear2 = _interopRequireDefault(_clear);

var _render = require("./DR/render");

var _render2 = _interopRequireDefault(_render);

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by petnakanojo on 29/07/2017.
 */
console.log("This is displayResult.js");
require("../styles/common/common.css");
require("../styles/common/nav-container.css");
require("../styles/DR/displayResult.css");
require('./lib/particles.js');
require("./DR/render");


var targetNode = $("#render-picture");
/*
const allData = [
    {
        smallURL: "../static/img/banner.jpg",
        largeURL: "../static/img/banner.jpg",
        largePATH: "../static/img/banner.jpg",
    },
    {
        smallURL: "../static/img/favicon.ico",
        largeURL: "../static/img/banner.jpg",
        largePATH: "../static/img/banner.jpg",
    },
    {
        smallURL: "../static/img/banner.jpg",
        largeURL: "../static/img/banner.jpg",
        largePATH: "../static/img/banner.jpg",
    },
    {
        smallURL: "../static/img/banner.jpg",
        largeURL: "../static/img/banner.jpg",
        largePATH: "../static/img/banner.jpg",
    },
    {
        smallURL: "../static/img/banner.jpg",
        largeURL: "../static/img/banner.jpg",
        largePATH: "../static/img/banner.jpg",
    },
    {
        smallURL: "../static/img/banner.jpg",
        largeURL: "../static/img/banner.jpg",
        largePATH: "../static/img/banner.jpg",
    },
    {
        smallURL: "../static/img/banner.jpg",
        largeURL: "../static/img/banner.jpg",
        largePATH: "../static/img/banner.jpg",
    },
    {
        smallURL: "../static/img/banner.jpg",
        largeURL: "../static/img/banner.jpg",
        largePATH: "../static/img/banner.jpg",
    },
];
*/
(0, _clear2.default)(targetNode);
_index.allData.forEach(_render2.default);

var DRsearchBar = $("#DR-search-input");
DRsearchBar.val(localStorage["searchInfo"]);

//监听搜索的回车事件，并进一步执行程序。监听到有输入即跳转到搜索结果的页面
DRsearchBar.bind("keyup", function (event) {
    //监听回车事件
    event = event || window.event;
    if (event.keyCode === 13) {
        var DRsearchInfo = DRsearchBar.val();
        if (DRsearchInfo.length !== 0) {
            localStorage["searchInfo"] = DRsearchInfo;
            $("#DR-search-input").val(localStorage["searchInfo"]);

            (0, _clear2.default)(targetNode);
            _index.allData.forEach(_render2.default);
            //这里要向服务器发请求

        } else {}
    }
}, false);

$(".pic-container").live("click", function () {
    var index = $(this).attr("data-id");
    $("#large-pic").attr("src", _index.allData[index].largeURL);
    $("#pic-path").html(_index.allData[index].largePATH);

    $("#render-picture").addClass("blur-display-heavy");
    $("#display-large-container").fadeIn(100);
});
$("#close-display").click(function () {
    $("#display-large-container").fadeOut(100);
    $("#render-picture").removeClass("blur-display-heavy");
});
particlesJS.load('particles-js', "../../../assets/particles.json", function () {
    console.log('callback - particles.js config loaded');
});

/*

[{
    smallURL: "  ",
    largeURL: " ",
    largePath: " ",
},{
    smallURL: "  ",
    largeURL: " ",
    largePath: " ",
},{
    smallURL: "  ",
    largeURL: " ",
    largePath: " ",
},{
    smallURL: "  ",
    largeURL: " ",
    largePath: " ",
}]
    */
//# sourceMappingURL=displayResult.js.map