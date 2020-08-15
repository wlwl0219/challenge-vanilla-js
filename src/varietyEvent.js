const title = document.querySelector(".js-addevent");
const body = document.querySelector("body");
const NORMAL = "normal";
const BIG = "big";
const SMALL = "small";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

// 다양한 addEventListener로 텍스트, 스타일, 클래스 등을 변경
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
    resizeClass: function () {
        const width = window.innerWidth;
        if (width >= 600 && width < 900) {
            body.classList.toggle(BIG, false);
            body.classList.toggle(NORMAL, true);
            body.classList.toggle(SMALL, false);
        } else if (width < 600) {
            body.classList.toggle(BIG, false);
            body.classList.toggle(NORMAL, false);
            body.classList.toggle(SMALL, true);
        } else {
            body.classList.toggle(BIG, true);
            body.classList.toggle(NORMAL, false);
            body.classList.toggle(SMALL, false);
        }
    },
    contextMenu: function () {
        title.textContent = "That was a right click!";
        title.style.color = colors[4];
    }
};

title.addEventListener("mouseover", superEventHandler.mouseOver);
title.addEventListener("mouseout", superEventHandler.mouseOut);
window.addEventListener("resize", superEventHandler.resizeClass);
window.addEventListener("resize", superEventHandler.resizeBrowser);
window.addEventListener("contextmenu", superEventHandler.contextMenu);