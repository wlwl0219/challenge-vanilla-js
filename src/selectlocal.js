const select = document.querySelector(".js-select");
const COUNTRY_LS = "country";

// select 이벤트가 일어나면 로컬스토리지에 저장
function saveCountry(event) {
  const currentCountry = event.target.value;
  localStorage.setItem(COUNTRY_LS, currentCountry);
}

// 로컬스토리지에 있다면 option이 선택 되어지게 유지
function loadCountry() {
  const currentCountry = localStorage.getItem(COUNTRY_LS);
  if (currentCountry) {
    const ele = document.querySelector(`option[value="${currentCountry}"]`);
    ele.selected = true
  }
}

function init() {
  loadCountry();
  select.addEventListener("change", saveCountry);
}

init();