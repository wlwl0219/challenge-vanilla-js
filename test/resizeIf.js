const body = document.querySelector("body");
const NORMAL = "normal";
const BIG = "big";
const SMALL = "small";

// resize addEventListener로 window.innerWidth에 따라 (if)
// classList.toggle를 이용해 배경색 변경
function reSize() {
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
}

function init() {
    window.addEventListener("resize", reSize);
}
init();