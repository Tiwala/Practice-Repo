// Generics are used to make consistent typing while taking in an argument
const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
    return val;
}

// the value can be anything, bad idea
function identityTwo(val: any): any {
    return val
}

// starts as any, but when you pass something, that value's type is LOGGED
// it remembers the value's type and makes it consistent everywhere
function identityThree<Type>(val: Type): Type {
    return val;
}

// if you mouse over, you'll see that it consistently adapts the types for everything
identityThree("3")

// same shit, T is a shortcut, can be any letter
// you can define your own types, and pass it in the <>
function identityFour<T>(val: T): T {
    return val;
}

interface Bottle {
    brand: string,
    type: number,
}

identityFour<Bottle>({brand: 'blah', type: 3})

// This is how to define an array type
// array of T types, one of the values from the array
// can also do (products: Array<Type>)
function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 3;
    return products[myIndex]
}

// arrow function version
// COMMA IS THERE TO INDICATE THAT IT'S NOT A JSX SYNTAX BUT A GENERIC
// IT'S TO LET PEOPLE KNOW YOU'RE USING GENERICS
const getMoreSearchProducts = <T,>(products: T[]): T => {
    // do some more shit
    const myIndex = 4
    return products[myIndex]
}

// normal arrow function
const someshit = (products: number[]): number => {
    // do some more shit
    const myIndex = 4
    return products[myIndex]
}

interface Database {
    connection: string,
    username: string,
    password: string,
}

// extends restricts the generic to the specified type which is interface Database
function anotherFunction<T, U extends Database>(valOne:T, valTwo:U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction(3, {connection: 'basura', username: 'tae', password: 'durog'})

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

// this is allowed and allows for the possibility of both interfaces
class Sellable<T extends (Course | Quiz)> {
    // cart that takes anything of that type T and makes an array of it
    // doesn't have a constructor because we're only ever calling the method to add it to the cart
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}

const basura = new Sellable
// because of the union, TS gives flexibility for both
// basura.addToCart({name: 'blah', subject: 'agh', author: 'nah'})
basura.addToCart({name: 'blah', type: 'nah'})