const clockTime = document.querySelector(".js-time");

Number.prototype.padLeft = function () {
  if (this < 10) {
    return "0" + String(this);
  } else {
    return String(this);
  }
};

function getTime() {
  const currDay = new Date();
  const hour = currDay.getHours().padLeft();
  const min = currDay.getMinutes().padLeft();
  const second = currDay.getSeconds().padLeft();
  clockTime.textContent = `${hour}h ${min}m ${second}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();