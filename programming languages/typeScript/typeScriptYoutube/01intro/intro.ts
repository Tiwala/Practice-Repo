let user = {name: "Gerard", age: 10}

console.log("Gerard")
console.log(user.age)

// console.log(user.email) // has squiggly lines under email bc ts immediately notifies you that it doesn't exist

// this won't work in production, if you type tsc intro.ts in terminal, creates a JS file with exact same code in folder
// this is what ts does; converts ts into js

// declares this file as an ES module and removes it from the global scope
export {}