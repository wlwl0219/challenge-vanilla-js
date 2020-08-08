const clockTitle = document.querySelector(".js-title");
clockTitle.textContent = "Time Until Christmas";
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
  //   const xmasDay = new Date(“2020-12-24:00:00:00+0900”);
  //   const dDay = xmasDay - currDay;
  //   const day = Math.floor(dDay / (1000 * 60 * 60 * 24));
  //   const hour = Math.floor((dDay / (1000 * 60 * 60)) % 24);
  //   const min = Math.floor((dDay / (1000 * 60)) % 60);
  //   const second = Math.floor((dDay / 1000) % 60);
  //   clockTime.textContent = `${day}d ${hour}h ${min}m ${second}s`;

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
