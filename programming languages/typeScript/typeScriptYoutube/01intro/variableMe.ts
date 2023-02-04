// Situations
// A function accepts 2 numbers
// A function returns a string

// syntax
// let variableName: type = value
// types are generally in lowercase, no camelcase

// this is possible if you just want to have a floating "whatever" that you can later modify
let whatever: string

let greetings: string = "Hello Gerard";
// greetings = 6 // will immediately say that you can't do this shit

// greetings. // this automatically puts out a dropdown of recommended STRING METHODS

let mynum = 6;

// mynum.toUpperCase() tells you can't do that shit because methods don't match type
console.log(greetings);

// number
// let userId: number = 334455.3; // TS is smart enough so you don't have to do this; not good practices
let userId = 334455.3;

userId.toFixed()

// boolean
// let isLoggedIn: boolean = false;
let isLoggedIn = false;

// Type Inference
// You don't need to declare the type a number and then immediately show the number, that's obvious and dumb

// gets rid of the error for the global scoped variable temporarily
export{}