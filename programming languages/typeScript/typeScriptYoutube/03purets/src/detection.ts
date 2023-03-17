// type narrowing
function detectTypes(val: number | string) {
    // can't do this bc it COULD be a number
    // return val.toLowerCase()

    // use typeof as a type guard for whatever variable is coming in
    if (typeof val === "string") {
        return val.toLowerCase()
    }

    return val + 3
}

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