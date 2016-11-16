/**
 * Created by Harry on 11/15/16.
 */
'use strict';

// write a function `chunk` that splits an array into chunks
// of 3
// ex
// > chunk([1,2,3,4,5,6,7])
//   [[1,2,3], [4,5,6], [7]]
// modify the function to take in a parameter for chunk size



// list array
(function () {
var arrayEx = [1,2,3,4,5,6,7];
var chunk;
// how many numbers do we want in our divided arrays - to be modified for parameter for chunk size
var splitter = prompt("Into how many parts should we divide the array?");
//create an equation that removes the splitter numbers
while (arrayEx.length > 0) {
    chunk = arrayEx.splice(0,splitter);
    console.log(chunk);
}
})();
// ---------->


// python example
// write a function that generates a range of numbers as an array
// ex
// > range(1,5)
//   [1, 2, 3, 4]
// modify the function such that you can pass in a third parameter
// for the step
// ex
// > range(2, 11, 2)
//   [2, 4, 6, 8, 10]
// can the third parameter be optional (default to 1)?
// can you create a range in reverse order? i.e. `range(5,2)


// forward function
(function () {
// start and end numbers for range
    var getNum1 = 1;
    var getNum2 = 5;
    var num = (getNum2-getNum1);
    function count(num) {
        var newArray =[];
        var i=getNum1;
        while (num--) {
            newArray.push(i++);
        }
        return newArray
    }
    console.log(count(num))
})();

// reverse function
(function () {
// start and end numbers for range
    var getNum3 = 5;
    getNum3 = (getNum3-1);
    var getNum4 = 1;
    getNum4 = (getNum4-1);
    var num2 = (getNum4-getNum3);
    function count2(num2) {
        var newArray2 =[];
        var i=getNum3;
        while (num2++) {
            newArray2.push(i--);
        }
        return newArray2
    }
    console.log(count2(num2))
})();

// // forward function with step parameter
// (function () {
// // start and end numbers for range
//     var getNum5 = 2;
//     var getNum6 = 11;
//     var getNum7 = prompt("Enter a number to divide the range by:");
//     if (getNum7 == 2) {
//         var getNum8 = 2;
//     } else {
//         getNum8 = 1;
//     }
//     var num3 = (getNum6-getNum5);
//     function count3(num3) {
//         var newArray3 =[];
//         var i=getNum5;
//         while (num3--) {
//             newArray3.push(i++);
//         }
//         return newArray3
//     }
//     console.log(count3(num3))
// })();

// ----------->
// write a function that takes an array, and returns an object
// whose keys are each value in the array, and whose values
// are the number of occurances of each key
// ex
// > getCount([6, 7, 4, 4])
// {6: 1, 7: 1, 4: 2}

// function uniqWithCount(array){
//     var counts = {};
//
//     array.forEach(function (item) {
//         counts[item] = 0;
//     });
//     array.forEach(function (item) {
//         counts[item] += 1;
//     });
//     return counts;
// }
// console.log(uniqWithCount(["pizza", "soda", "pizza"]));
// ----------->

// write a function that checks if a string is a palindrome
// *bonus*: ignore special characters, whitespace, and casing

// t9 calculator
// write a function that accepts a string and returns the number
// of keypresses it would take to create that string with t9

// convert back and forth from 24 hour to 12 hour time with 2 functions
// ex
// convertToTwentyFourHour('1:30pm') // 13:30
// convertToTwelveHourTime('14:40') // 2:20pm