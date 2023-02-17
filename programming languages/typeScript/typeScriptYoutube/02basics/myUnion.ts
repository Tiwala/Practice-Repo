// allows you to be in a situation where you are not sure what type of data is gonna come in
// UNION is a combination 2 or more types of data in a variable or array etc

let score: number | string = 33;
score = 44;
score = '55'

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

// Allows you to create variable flexibility for multiple types
let nadal: User | Admin = {name: "nadal", id: 334}
// See, even if you change from User type to Admin type, it still works
nadal = {username: "durog", id: 334}

function getDbId(id: number | string) {
    if (typeof id === 'string') {
        // because of the conditional id is 100% a string
        return id.toLowerCase();
    }
    // TS knows that at this point the conditional catches strings
    return id + 2;
}
getDbId(3)
getDbId('3')

// This shit doesn't work because you said it's possible to make number a type
// .toLowerCase() doesn't work with numbers, it'll work if you remove it
// function getDbId(id: number | string) {
//     id.toLowerCase()
// }

// const data: number | string[] = [1, 2, 3, "4"] // this shit doesn't fly
// const data: number[] | string[] = [1, 2, 3, "4"] // this shit doesn't fly either
const data: (number | string)[] = [1, 2, 3, "4"]

export {}