const User = {
    name: "gerard",
    email: "thedreamerg@gmail.com",
    isActive: true,
}

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
function createCourse(): {name: string, price: number} {
    return {
        name: "trash",
        price: 69
    }
}

// Type Aliases
// type is a TS keyword
// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// // You can create a custom type and make it strictly a specific type
// type Mystring = string

// // By creating a type, it allows you to condense parameters like so
// function createUser(user: User): User {
//     // return needs to be in User format
//     return {name: "", email: "", isActive: true}
// }

// // If blank, will create squiggly bc it doesn't adhere to the type
// createUser({name: "", email: "", isActive: true})

// another ex

type Point = {
    x: number;
    y: number;
};

function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 })

// READONLY and optional
type User = {
    readonly _id: string, // you won't be able to change it
    name: string,
    email: string,
    isActive: true,
    credcardDetails?: number // the ? makes it OPTIONAL
}

let myUser: User = {
    _id: "1234",
    name: "h",
    email: "H@h.com",
    // isActive: false // this doesn't work because it's only allowed to be true
    isActive: true,
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

// This is an alternate way of declaring a type alias, not good practice
type cardDetails = cardNumber & cardDate & {
    cvv: number
} // ampersand lets you COMBINE

myUser.email = "h@gmail.com" // indicates that you can change the email key
// myUser._id = "asa" // this won't work because we marked it as READONLY


export {}