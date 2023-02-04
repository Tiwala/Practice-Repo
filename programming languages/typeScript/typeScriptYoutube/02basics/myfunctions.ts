function addTwo(num: number): number { // Makes it such that the function only returns a number
    // the parameter is kept as any if you don't declare it as a num and you can do non-num methods on it
    // whole point of TS is strict typing
    // you don't have to run conditionals that throw errors if it ain't a number anymore yo
    return num + 2;
    // return "hello" // this will work
}

// In the case of variables, it's optional, when do declare it, TS automatically picks up its type
// In the case of functions, declaring the type is ESSENTIAL to narrow the parameters
function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {

}

// You can give a default parameter so that you can only put 2 arguments
// If isPaid is void, makes it default false
const loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

addTwo(5);
getUpper("akosinadal");
signUpUser("nadal", "akosinadal@nadal.com", false)
loginUser("h", "h@h.com")

// Will need to declare more than 1 type
// function getValue(myVal: number) {
//     if (myVal > 5) {
//         return true;
//     }
//     return "200 OK"
// }

// Arrow function syntax
const getHello = (s: string): string => {
    return "hello";
}

const heroes = ["thor", "spiderman", "ironman"];
// const heroes = [1, 2, 3];

// Automatically indicates that hero is typeof: string
// If we use the number array, TS is smart enough that it will indicate hero is a number instead 
// A bit later, we made a strictier declaration to explicitly take only string parameters in the given array
heroes.map((hero): string => {
    return `hero is ${hero}`;
})

// Since this shit is designed to return an error in the console, you explicitly state that it won't return anything
// This isn't the optimal way for handling errors; it's better to do a NEVER and throw an error
function consoleError(errmsg: string): void {
    console.log(errmsg)

    // This shit will show squiggly lines because void can't return 1
    // return 1;
}

// NEVER is a type for functions that never return a value; you can't do a return or a console.log
// For handling errors
// The function throws an exception or terminates execution of the program
function handleError(errmsg: string): never {
    // console.log(errmsg)
    throw new Error(errmsg);

}

export {}