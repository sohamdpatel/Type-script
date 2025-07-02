"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var counter = 11;
var name = "Sdp";
var active = true;
console.log(counter, name, active);
// counter = "hello"
// this gives a error like this "error TS2322: Type 'string' is not assignable to type 'number'."
// Array type define
var count = [1, 2, 3, 4, 5];
var count2 = [1, 2, 3, 4, 5];
// these are two type of Array declaration and both are same there is not any single diffrence.
var multiTypeArray = [1, 2, 3, 4, "Sdp"];
var count3 = [5, 4, 3, 2, 1];
var SquareCount3 = count3.map(function (num) { return num * num; });
console.log(SquareCount3);
// console.log(count[0])
// console.log(count2[0])
// console.log(typeof count[0])
// console.log(typeof count);
// console.log(multiTypeArray);
// Declare a function
function greeting(name) {
    return "Hi ".concat(name);
}
var greeting1 = greeting("Soham");
// when we wrote this thing, re declared error doesn't show.
