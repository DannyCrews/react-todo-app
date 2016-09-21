// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));

// var groupA = ['Dan', 'Cynthia'];
// var groupB = ['Lucas'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Andrew', 25];
var person2 = ['Jen', 29];

function greeting(name, age) {
  console.log(`Hi ${name}, you are ${age}`);
}

greeting(...person);
greeting(...person2);

var names = ['Mike', 'Ben'];
var final = ['Andrew'];

function greeting2 (names) {
  names.forEach(function (name) {
    console.log(`Hi ${name}`);
  });
}

greeting2([final, ...names]);
