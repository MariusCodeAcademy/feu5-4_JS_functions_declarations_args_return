'use strict';
console.log('parameters.js file was loaded');

// global variables
let n1 = 51;
let n2 = 10;
// debugger;
function add(sk1, sk2) {
  let sum = sk1 + sk2;
  console.log(`${sk1} + ${sk2} = ${sum}`);
}

add(5, 10);
add(51, 10);
add(71, 50);

function sp(message) {
  console.log('spausdinama reiksme');
  console.log(message);
}

sp(n2);
sp('Laba diena');
