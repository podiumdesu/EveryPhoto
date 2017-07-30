console.log("This is myGallery.js");
console.log("dd");
require('../styles/common/common.css');
require('../styles/common/nav-container.css');
require('../styles/MG/inputInfo.css');
import addNewBar from './MG/addNewBar';

console.log("ddd");


$("#addNewBar").click(function() {
    $(".ga-bar").addClass("blur-display");
    $("#inputInfo").fadeIn(200);
});

let searchBar = $("#pathValue");
searchBar.bind("keyup",function(event) {    //监听回车事件
    let pathVal = $("#pathValue").val();
    var searchInfo = searchBar.val();
    var event = event || window.event;
    if (event.keyCode === 13) {
        if (searchInfo.length !== 0) {
            if(pathVal.length >= 0) {
                addNewBar(pathVal);
            }
            $("#inputInfo").fadeOut(200,function() {
                $(".ga-bar").removeClass("blur-display");
                $("#pathValue").val("");
            });
        } else {
        }
    }
},false);

$("#btn-addNewInfo").click(function() {
   alert("ok");
    let pathVal = $("#pathValue").val();
   if(pathVal.length >= 0) {
       addNewBar(pathVal);
   }
    $("#inputInfo").fadeOut(200,function() {
        $(".ga-bar").removeClass("blur-display");
        $("#pathValue").val("");
    });

});

$("#btn-cancel").click(function() {
    $("#inputInfo").fadeOut(200,function() {
        $(".ga-bar").removeClass("blur-display");
        $("#pathValue").val("");
    });
});