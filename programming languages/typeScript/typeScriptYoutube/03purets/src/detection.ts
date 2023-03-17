// type narrowing
// typeof
function detectTypes(val: number | string) {
    // can't do this bc it COULD be a number
    // return val.toLowerCase()

    // use typeof as a type guard for whatever variable is coming in
    if (typeof val === "string") {
        return val.toLowerCase()
    }

    return val + 3
}

// ! not operator checks for falsy values
function provideId(id: string | null) {
    if (!id) {
        console.log('Please provide ID');
        return
    }
    id.toLowerCase()
}

function printAll(strs: string | string[] | null) {
    // DON'T DO THIS SHIT
    // DOES NOT COVER FOR EMPTY STRING, FALSY VALUE
    if (strs) {
        if (typeof strs === 'object') {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === 'string') {
            console.log(strs);
        }
    }
}

// instead, do this
function printAllBetter(strs: string | string[] | null) {
    // checks if strs is TRUTHY AND NOT AN EMPTY STRING
    if (strs && typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
}

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

// IN OPERATOR
// checks if account interface is Admin
function isAdminAccount(account: User | Admin) {
    // immediately checks if property is inside the argument
    if ("isAdmin" in account) {
        return account.isAdmin;
    }

    return false;
}

// instanceof narrowing
// instanceof checks if value contains an instance of some class or prototype
// useful for most values that can be constructed with NEW
// instanceof is also a type guard
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}

// Type Predicates
// to use a user-defined typed guard,
// define a function whose return type is a type predicate
type Fish = {
    swim: () => void;
}
type Bird = {
    fly: () => void;
}
// pet is Fish typecasts it into particular type
function isFish(pet: Fish | Bird): pet is Fish {
    // pet is a Fish if it has a method of .swim and is not undefined
    // returns true if pet is a Fish
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        // this is truly a fish now bc of pet is Fish
        // would have been unsure otherwise
        pet
        return "fish food"
    } else {
        pet
        return "bird food"
    }
}

// Discriminative Union
interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number,
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side * shape.side;
}

// Exhaustive Check
function getArea(shape: Shape) {
    // just tried switch cases just because
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        // Exhaustiveness checking
        // This is to show that you've exhausted all possibilities
        // If there is anything else, it shouldn't exist
        default:
            const _defaultforshape: never = shape;
            return _defaultforshape
    }
}