/*

You get arry of numbers,return the sum of all positives ones.
if there is nothing to sum id default is 0.


*/

let x = [10, 20, -30, 40, 50];

// let y = x.filter(function(e) {
//     return e > 0;
// }).reduce(function(privous, current) {
//     return privous + current;
// });


// console.log(y);

let y = x.filter(function(e) {
    return e > 0;
})

console.log(y)





// initValue = 0
// loop arry 
// +


// function sumPositiveNumber(arr) {
//     let initValue = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             initValue += arr[i];
//         }
//     }
//     return initValue;
// }

let initValue = 0;
for (let i = 0; i < x.length; i++) {
    if (x[i] > 0) {
        initValue += x[i];
    }
}


console.log(initValue)