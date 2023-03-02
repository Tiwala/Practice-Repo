// TYPE supports only the data types and not the use of an object
// INTERFACE supports the use of an object, describes data shapes for example, an object
interface User {
    // readonly makes it not manipulable
    readonly dbId: number,
    email: string,
    userId: number,
    // adding a questionmark makes it optional
    googleId?: string,
    // create a method, returns a string
    // startTrial: () => string // NOT OPTIMAL but people still do this
    startTrial(): string,
    getCoupon(couponname: string, value: number): number
}

// in interfaces, you can manipulate the interface multiple times and add parameters like this
// "Reopening of the interface"
interface User {
    githubToken: string
}

// empty interface, just to prove a point to show you can extend from multiple interfaces
interface Another {

}

// EXTENDS gets all the properties of User, then also adds shit from inside Admin
interface Admin extends User,
Another
{
    role: "admin" | "ta" | "learner"
}

const nadal: Admin = {
    dbId: 22, email: "nadal@nadal.com", userId: 6969, githubToken: "githubToken",
    startTrial: () => {
        return 'durog';
    },
    getCoupon: (name: "durog", off: 95) => {
        return 10;
    },
    // has to be explicit amongst the choices amongst the role property in the Admin interface
    role: "admin"
}
nadal.email = "skwater@nadal.com"
// CANNOT change readonly values
// hitesh.dbId = 33

// Differences between Interface and Type

// Extending an interface
interface Animal {
    name: string
}

interface Bear extends Animal {
    honey: boolean
}


// Extending a type via intersections
type Animal2 = {
    name: string
}

// ugly ass ampersand
type Bear2 = Animal & {
    honey: boolean
}

// You can add new fields to an existing interface
// You CANNOT change a type after it is created