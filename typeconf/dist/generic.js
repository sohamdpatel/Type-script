"use strict";
function infoType(val) {
    return val;
}
function infoTypeTwo(val) {
    return val;
} // we can use any word rather than T
function infoTypeArray(vals) {
    // Do some works like get from databse
    const myIndex = 3;
    return vals[3];
}
const infoTypeArray2 = (vals) => {
    // Do some works like get from databse
    const myIndex = 3;
    return vals[3];
}; // This is the 2 way of write a parameter to take Arguments as a Array 
function infoType2(val1, val2) {
    return { val1, val2 };
} // we can also use two diffrent type like generics
