const NINE_HOURS_MILLISECONDS = 32400000;
const clockTime = document.querySelector(".js-time");

// newDate로 현재 시간과 크리스마스시간을 구해 서로 빼서 남은 시간을 계산
// 그 남은시간을 날수와 시간 분 초로 계산해 textContent 넣고
// setInterval로 초당 주기적인 실행
function getTime() {
  const currDay = new Date();
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const dDay = xmasDay - currDay;

  const day = Math.floor(dDay / (1000 * 60 * 60 * 24));
  const hour = Math.floor((dDay / (1000 * 60 * 60)) % 24);
  const min = Math.floor((dDay / (1000 * 60)) % 60);
  const second = Math.floor((dDay / 1000) % 60);

  clockTime.textContent = `${day < 10 ? `0${day}` : day}d ${
    hour < 10 ? `0${hour}` : hour
  }h ${min < 10 ? `0${min}` : min}m ${second < 10 ? `0${second}` : second}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();