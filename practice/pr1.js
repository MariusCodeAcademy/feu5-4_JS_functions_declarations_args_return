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
minutesToSeconds(125);
