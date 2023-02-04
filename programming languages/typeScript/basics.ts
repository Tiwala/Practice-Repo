// All TypeScript does is TYPE SAFETY and STATIC CHECKING
// It is NOT REALLY a new programming language; it's a superset or wrap-around to write better JavaScript

// Static checking = the syntax of the language is constantly being analyzed by IDEs
// JavaScript doesn't do that, you only find out errors and shit after JS gets executed in browsers or node environment etc
// Then you gotta rerun and shit
// In TS for example, it will tell you that you're trying to access an object that doesn't exist AS YOU CODE
// TS is just for static checking. It just analyzes your code and helps you understand that you might run into a potential error
// WITHOUT running the code

// You will generally write more code in TS than you would in JS

// .ts, or .tsx for React
// TS code is being CONVERTED into JS
// TS is a DEVELOPMENT TOOL. Your project STILL RUNS IN JS. It helps you write better code with less problems,
// more easily understood, and less chances of error.
// Something of a wrapper around JS.

let user = {name: 'nadal', age: 37}
// let email = user.email // immediately notifies you that email doesn't exist in user obj

let numberOne = 3;
let numberTwo = "3"
let sum = numberOne + numberTwo; // will still return "33"

// VSCode supports TypeScript but doesn't include TypeScript compiler, tsc.
// You still have to install the TypeScript compiler via sudo npm install -g typescript
// You also have to do sudo npm install -g ts-node

// Types
// Number, String, Boolean (PRIMITIVES)
// Null, Undefined, Void
// Object, Array, Tuples, etc
// Any (makes it JavaScript-ish, known for not being used, if you don't wanna write long shit), Never, unknown
// TypeScript is all about mastering all the types to separate them for TYPE SAFETY

// TypeScript helps you out in figuring out what data is about to be processed

// Using ANY is bad practice; turns off type checking, why are you even use TypeScript?
// Declaring a variable without a value defaults it as any
// noImplicitAny flags any implicit ANY as an error

// RUNNING TYPESCRIPT
// Instead of pressing the play button on the top right, do a tsc [filename]
// It'll 