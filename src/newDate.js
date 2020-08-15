const NINE_HOURS_MILLISECONDS = 32400000;
const xmasTime = document.querySelector(".js-timexmas");
const curTime = document.querySelector(".js-timecurr");
Number.prototype.padLeft = function () {
  if (this < 10) {
    return "0" + String(this);
  } else {
    return String(this);
  }
}

// newDate로 현재 시간과 크리스마스시간을 구한다.
// 현재시간과 크리스마스의 남은시간을 날과 시간 분 초로 계산해 textContent 넣고
// setInterval로 초당 주기적인 실행
function getXmasTime() {
  const calculDay = new Date();
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const dDay = xmasDay - calculDay;

  const day = Math.floor(dDay / (1000 * 60 * 60 * 24));
  const hour = Math.floor((dDay / (1000 * 60 * 60)) % 24);
  const min = Math.floor((dDay / (1000 * 60)) % 60);
  const second = Math.floor((dDay / 1000) % 60);

  xmasTime.textContent = `${day < 10 ? `0${day}` : day}d ${
    hour < 10 ? `0${hour}` : hour
  }h ${min < 10 ? `0${min}` : min}m ${second < 10 ? `0${second}` : second}s`;
}

function getCurrTime() {
  const currDay = new Date();
  const hour = currDay.getHours().padLeft();
  const min = currDay.getMinutes().padLeft();
  const second = currDay.getSeconds().padLeft();
  curTime.textContent = `${hour}h ${min}m ${second}s`;
}

function init() {
  getXmasTime();
  setInterval(getXmasTime, 1000);
  getCurrTime();
  setInterval(getCurrTime, 1000);
}
init();