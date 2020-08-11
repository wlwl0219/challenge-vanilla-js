const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

// 다양한 addEventListener로 textContent, style.color를 변경
const title = document.querySelector(".js-addevent");
const superEventHandler = {
    mouseOver: function () {
        title.textContent = "The mouse is here!";
        title.style.color = colors[0];
    },
    mouseOut: function () {
        title.textContent = "The mouse is gone!";
        title.style.color = colors[1];
    },
    resizeBrowser: function () {
        title.textContent = "You just resized!";
        title.style.color = colors[2];
    },
    contextMenu: function () {
        title.textContent = "That was a right click!";
        title.style.color = colors[4];
    }
};
title.addEventListener("mouseover", superEventHandler.mouseOver);
title.addEventListener("mouseout", superEventHandler.mouseOut);
window.addEventListener("resize", superEventHandler.resizeBrowser);
window.addEventListener("contextmenu", superEventHandler.contextMenu);