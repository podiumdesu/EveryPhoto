
export default function(pathVal) {
    const targetNode = $("#gallery-container");
    let div = document.createElement("div");
    div.className += 'ga-bar';
    let p = document.createElement("p");
    let t = document.createTextNode(pathVal);
    p.appendChild(t);
    div.appendChild(p);
    console.log("ddd");
    targetNode.prepend(div);
}