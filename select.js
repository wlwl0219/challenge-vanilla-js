const select = document.querySelector(".js-select");
const options = document.querySelectorAll("option");
const COUNTRY_LS = "country";

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
