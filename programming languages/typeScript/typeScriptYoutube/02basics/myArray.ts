// defining arrays like this will automatically make it type NEVER
// NEVER never executes or ends the thing, doesn't return anything
// const superHeroes = [];

const superHeroes: string[] = [];
// const heroPower: number[] = []
// this is the same as above
const heroPower: Array<number> = [];

superHeroes.push("spiderman")
heroPower.push(2)

type User = {
    name: string
    isActive: boolean
}

// allUsers only takes in OBJECTS that contain name and isActive
const allUsers: User[] = []
allUsers.push({name: "", isActive: true});

// Indicates that this is an array of arrays that only takes numbers
const MLModels: number[][] = [
    [255, 255, 255],
    []
]

// syntax for assigning multiple types to an array
const multiArray: (string|number)[] = [1, 'trash']