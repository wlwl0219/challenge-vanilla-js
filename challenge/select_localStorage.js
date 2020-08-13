const select = document.querySelector(".js-select");
const options = document.querySelectorAll("option");
const COUNTRY_LS = "country";

// select addEventListener로 국가를 선택하면
// localStorage.setItem으로 저장
// 이미 저장된 값이 있으면 options의 value값과 같은 것을 찾아
// setAttribute("selected", ""); 재부팅 되도 선택되어지게 
function saveCountry(event) {
  const currentCountry = event.target.value;
  localStorage.setItem(COUNTRY_LS, currentCountry);
}

function askForCountry() {
  select.addEventListener("change", saveCountry);
}

function selectCountry(country) {
  for (let i = 0; i < options.length; i++) {
    if (country === options[i].value) {
      options[i].setAttribute("selected", "");
    }
  }
}

function loadCountry() {
  const currentCountry = localStorage.getItem(COUNTRY_LS);
  askForCountry();
  if (currentCountry) {
    selectCountry(currentCountry);
  }
}

function init() {
  loadCountry();
}

init();

// const select = document.querySelector(".js-select");

// function handleChange() {
//   const selected = select.value;
//   localStorage.setItem("country", selected);
// }

// function loadCountries() {
//   const selected = localStorage.getItem("country");
//   if (selected) {
//     const option = document.querySelector(`option[value="${selected}"]`);
//     option.selected = true;
//   }
// }

// loadCountries();
// select.addEventListener("change", handleChange);