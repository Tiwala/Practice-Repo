// You will be given a list of 32 bit unsigned integers. 
// Flip all the bits (1 -> 0 and 0 -> 1) and return the result as an unsigned integer.

function flippingBits(n) {
    // Write your code here
    // ~ is Bitwise NOT, inverts the bits of its operand and converts it into a 32-bit SIGNED integer
    // >>> is Unsigned right shift
    return ~n >>> 0;
}