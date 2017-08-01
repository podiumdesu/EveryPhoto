console.log("This is myGallery.js");
console.log("dd");
require('../styles/common/common.css');
require('../styles/common/nav-container.css');
require('../styles/MG/inputInfo.css');
import {libData} from './MG/libData';
import renderLIB from './MG/renderLIB';
import clear from './clear';
export let searchPath;
searchPath = "";

//searchPath = "/Users/petnakanojo/Documents/img";    //这是一个假数据


const targetNode = $("#gallery-container");
let storedLIBData;
let divContainer = document.createElement("div");
divContainer.setAttribute("id","addNewBar-container");
divContainer.className += "ga-bar";
divContainer.innerHTML = `
        <p>添加新图库</p>
        <div id="addNewBar">
        <p>+</p>
        </div>
    `;


storedLIBData = JSON.parse(localStorage.getItem("LIB"));
if (storedLIBData.length > 0) {
    clear(targetNode);
    storedLIBData.forEach(renderLIB);
}
targetNode.append(divContainer);


$("#addNewBar").live("click", function() {
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
$(".choose-path").live("click",function() {

});

$("#btn-addNewInfo").click(function() {
   let newLIB = {};
   newLIB.name = $("#nameValue").val();
   newLIB.path = $("#pathValue").val();

   if(newLIB.path.length > 0) {
       console.log("It works");
       clear(targetNode);

       storedLIBData = JSON.parse(localStorage.getItem("LIB"));
       console.log("d");
       storedLIBData.push(newLIB);
       console.log("dd");
       localStorage.setItem("LIB",JSON.stringify(storedLIBData));
       console.log("ddd");
       storedLIBData = JSON.parse(localStorage.getItem("LIB"));
       console.log("dddd");
       console.log(storedLIBData);

       storedLIBData.forEach(renderLIB);
       targetNode.append(divContainer);

       $("#inputInfo").fadeOut(200,function() {
           $(".ga-bar").removeClass("blur-display");
           $("#pathValue").val("");
       });
   }
    alert("ok");
});

$("#btn-cancel").click(function() {
    $("#inputInfo").fadeOut(200,function() {
        $(".ga-bar").removeClass("blur-display");
        $("#pathValue").val("");
    });
});