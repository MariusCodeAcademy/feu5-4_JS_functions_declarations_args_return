'use strict';
console.log('pr1.js file was loaded');

/*
1. Sukurti funkcija minutesToSeconds(minutes). Fn atspausdina ir grazina kiek sekundziu gautusi pavertum minutes skliausteliuose
   (getSeconds(5) - 300sek)
*/
minutesToSeconds(666);

function minutesToSeconds(minutes) {
  let totalSeconds = minutes * 60;
  console.log(`${minutes} minutes is ${totalSeconds} seconds`);
  return totalSeconds;
  let a = 4; // unreachable code
}

minutesToSeconds(10);
minutesToSeconds(5);
minutesToSeconds(45);
let min1 = minutesToSeconds(125);
console.log('min1 ===', min1);

// parasyti funkcijja kuri gali sudeti arba atimti priklausomai nuo argumentu
// ir atspausdinti ir grazinti

// prideti daugyba ir dalyba prie calculate

function calulate(sk1, action, sk2) {
  if (action === '+') {
    let sudetis = sk1 + sk2;
    console.log('sudetis ===', sudetis);
    return sudetis;
  } else if (action === '-') {
    let atimtis = sk1 - sk2;
    console.log('atimtis ===', atimtis);
    return atimtis;
  }
}

let sk1 = calulate(10, '+', 5);
let sk2 = calulate(10, '-', 5);
// console.log('atimtis ===', atimtis);
let skSuma = sk1 + sk2;
// arba
skSuma = calulate(sk1, '+', sk2);
