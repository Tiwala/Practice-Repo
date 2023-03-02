// Just an array, TUPLES are a kind of specialized array given to us by TS with some restrictions on it
// Restricts the ORDER of shit
// You declare a variable using LET, and state the order of types in an array
let user: [string, number, boolean]
// How it's used
user = ['nadal', 69, true]

// this doesn't work because you put 4 numbers when you are only allowed 3 by the tuple
// let rgb: [number, number, number] = [69, 222, 51, 0.5]

// Can also create types with tuples
type User = [number, string];
const newUser: User = [112, 'example@google.com'];

// can change them depending on position
newUser[1] = "nadal"
// bawal kasi number
// newUser[0] = 'nadal'

// BAWAL bc the tuple restricts addition into array
// newUser.push(true);

export {}