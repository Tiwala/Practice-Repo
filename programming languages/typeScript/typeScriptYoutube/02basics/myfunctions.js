"use strict";
exports.__esModule = true;
function addTwo(num) {
    // the parameter is kept as any if you don't declare it as a num and you can do non-num methods on it
    // whole point of TS is strict typing
    // you don't have to run conditionals that throw errors if it ain't a number anymore yo
    return num + 2;
}
// In the case of variables, it's optional, when do declare it, TS automatically picks up its type
// In the case of functions, declaring the type is ESSENTIAL to narrow the parameters
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
// You can give a default parameter so that you can only put 2 arguments
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("akosinadal");
signUpUser("nadal", "akosinadal@nadal.com", false);
loginUser("h", "h@h.com");
