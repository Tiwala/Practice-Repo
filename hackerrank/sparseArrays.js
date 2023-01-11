// There is a collection of input strings and a collection of query strings.
// For each query string, determine how many times it occurs in the list of input strings.
// Return an array of the results.


function matchingStrings(strings, queries) {
    // Write your code here
    // You need to slice or spread the queries array because
    // straight creating a variable trying to copy it won't allow you to change it
    let copy = [...queries];
    // Makes an array of zeroes with the same length of queries which we are going to modify
    // If the queries don't ever match, it'll just be zero by default
    copy.fill(0, 0, copy.length);
    
    // Iterates through both arrays individually and if the query exists in the string, increments the copy array
    // according to the position of the query
    for (let i = 0; i < strings.length; i++) {
        for (let j = 0; j < queries.length; j++) {
            if (strings[i] === queries[j]) {
                copy[j] = copy[j] + 1;
            }
        }
    }
    return copy;
}
