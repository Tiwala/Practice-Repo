// enums allows devs to strictly define a set of named constants
// initially start with a numeric value of 1 unless delared otherwise; after that, they numerically increment
// i.e. 0, 1, 2, 3 or 1, 2, 3, 4
enum SeatChoice {
    AISLE = 10,
    MIDDLE,
    WINDOW,
    FOURTH
}

const gsjSeat = SeatChoice.AISLE

// You can create Sets for strings, but you can also mix types
enum SeatWhatever {
    blah = "aisle",
    blahblah = 3,
    nadal = 4
}

// if you compile the enum SeatChoice above, compiles a crazy amount of code, with an immediately invoked function
// solution to that is to put a const before it, i.e. const enum SeatChoice{}
// what it does is it just compiles the AISLE gsjSeat, i.e. 10
export {}