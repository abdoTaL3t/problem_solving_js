/*
    craete a function that takes an integer 
    as an argument and returns "Even"for evevn numbers or 
    "Odd" for odd numbers.
*/

// - the first solution

function even_or_odd(num) {
    if (num % 2 === 0) {
        return "This Number Is Even Number ";
    } else {
        return "This Number Is Odd Number ";
    }
};

console.log(even_or_odd(8));
// - two
function evenOdd(num) {
    return num % 2 === 0 ? " Number Is Even " : " Number Is Odd  ";
};
console.log(evenOdd(5));