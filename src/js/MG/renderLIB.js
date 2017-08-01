
export default function(element,index) {
    const targetNode = $("#gallery-container");
    let div = document.createElement("div");
    div.setAttribute("data-id",index);
    div.className += 'ga-bar';
    div.innerHTML = `
        <div class="choose-path">
            <p>YES</p>
        </div>
        <p class="lib-name">${element.name}</p>
        <p class="lib-path">${element.path}</p>
    `;
    targetNode.prepend(div);

}