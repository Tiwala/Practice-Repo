"use strict";
exports.__esModule = true;
var User = {
    name: "gerard",
    email: "thedreamerg@gmail.com",
    isActive: true
};
// Function for creating an object; it will cause an error if the parameter types aren't met
// function createUser({name: string, isPaid: boolean}) {
//     const newObj = {
//         name: string,
//         isPaid: boolean
//     }
//     return newObj;
// }
// function requires said types to create function
// console.log(createUser({name: "nadal", isPaid: false}))
// WEIRD BEHAVIOR OF TYPESCRIPT
// If you do this, it'll run squiggly lines because you didn't define the function to take an email
// createUser({name: "nadal", isPaid: false, email: "akosinadal@nadal.com"})
// BUT declaring a variable with the said contents and putting it in as an argument WORKS
// BUT it STILL WON'T RETURN THE 3RD PARAMETER
// let newUser = {name: "nadal2", isPaid: false, email: "akosinadal@nadal.com"}
// createUser(newUser)
// 1st bracket is "return type", declares what you should be returning
function createCourse() {
    return {
        name: "trash",
        price: 69
    };
}
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
var myUser = {
    _id: "1234",
    name: "h",
    email: "H@h.com",
    // isActive: false // this doesn't work because it's only allowed to be true
    isActive: true
};
myUser.email = "h@gmail.com"; // indicates that you can change the email key
