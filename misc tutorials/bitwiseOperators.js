// 8 bit
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011

console.log(1 | 2) // Bitwise OR, if any bits are 1, marks positions as 1, otherwise, it will be 0; returns 3
console.log(1 & 2) // Bitwise OR, if BOTH bits are 1, it will be 1, otherwise, it will be 0; returns 0;

// Read, Write, Execute (Permissions, last 3 bits)
// 00000100 (essentially Read permission only)
// 00000010 (Write Permission)
// 00000001 (Execute permission)

const readPermission = 4;
const writePermission = 2;
const executePermission = 1

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission
console.log(myPermission) // returns 6

let message = (myPermission & readPermission) ? 'yes': 'no';