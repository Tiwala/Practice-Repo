// class User {
//     email: string
//     name: string
//     // automatically passes it as nothing, making it not needed to be passed in constructor
//     // city: string = ""
//     private readonly city: string = "Mallorca" // makes it inaccesible and gives it a static value of an empty string that cannot be changed
//     // #city can also be used to say it's private (the hashtag)
//     constructor(email: string, name: string) {
//         // refers to line 2
//         this.email = email;
//         // refers to line 3
//         this.name = name;
//     }
// }

// Pros code like this, it's the same as above
class User {
    // ACCESS MODIFIERS
    // private _courseCount = 1
    // protected is an access modifier that makes it accessible to this class, and all classes that inherit it
    protected _courseCount = 1;

    readonly city: string = "Mallorca"
    constructor(
        public email: string,
        public name: string,
        // private userId: string
        ) {
    }
    private deleteToken() {
        console.log("Token deleted");
    }

    // getters bind properties to functions that do tasks when it's accessed
    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    // You can access private properties with getters but not directly
    get courseCount(): number {
        return this._courseCount
    }
    // setters can't return SHIT so TS doesn't allow you to set a return type
    // setters access a property and allow you to manipulate them, even PRIVATE ones
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

// remember that EXTENDS inherits shit from User
// CANNOT INHERIT PRIVATE PROPERTIES
// Private properties can only be accessed within its class
class SubUser extends User {
    isFamily: boolean = true;
    changeCourseCount() {
        this._courseCount = 4;
    }
}

const nadal = new User("n@n.com", "nadal")
// even if city isn't defined in class, can be edited
// cannot edit a readonly property
// nadal.city = "trash"
// cannot call a private property; only accessibile in constructor
// console.log(nadal.city)
console.log(nadal)