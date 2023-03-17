"use strict";
// Generics are used to make consistent typing while taking in an argument
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
// the value can be anything, bad idea
function identityTwo(val) {
    return val;
}
// starts as any, but when you pass something when you pass something, that value's type is LOGGED
// it remembers the value's type and makes it consistent everywhere
function identityThree(val) {
    return val;
}
// if you mouse over, you'll see that it consistently adapts the types for everything
identityThree("3");
// same shit, T is a shortcut, can be any letter
// you can define your own types, and pass it in the <>
function identityFour(val) {
    return val;
}
identityFour({ brand: 'blah', type: 3 });
