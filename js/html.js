'use strict';
console.log('html.js file was loaded');

// parasyti funkcija kuri ijungia darkMode
// body uzdeti klase darkMode

// sideEffect fn
function setDarkModeOn() {
  document.body.className = 'darkMode';
  console.log('document.body.className ===', document.body.className);
}
function setLightModeOn() {
  document.body.className = '';
  console.log('document.body.className ===', document.body.className);
}
// setDarkModeOn();

// pr7. Sukurti funkcija toggleMode()
// jei yra siuo metu dark mode ijungtas tai isjungia
// jei yra light mode ijungtas tai isjungia
function toggleMode() {
  if (document.body.className === 'darkMode') {
    setLightModeOn();
  } else {
    setDarkModeOn();
  }
}
