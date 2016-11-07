/**
 * Created by Harry on 11/7/16.
 */
'use strict';

// for - special case of while
// syntax
// for (/*initial*/; /*condition*/; /*expression*/)
// { /* statements */ }

// break and continue
// allow us to alter control flow within loops

// count 0 to 5
// var i = 0;
// while (true) {
//     console.log(i);
//     i += 1;
//     if (i > 5) {
//         break; ///   ---+
//     } //                |
// }  // <-----------------+
//
// while (true) {
//     break;
//     console.log('will you see this?');
// }
//
// // print the even numbers between 1 and 10
// for (var i = 1; i <= 10; i += 1) { // <---+
//     // check if we have an odd number     |
//     if (i % 2 == 1) { //                  |
//         continue; //  --------------------+
//     }
//
//     console.log(i);
// }
var numberToSkip;
    do {
        numberToSkip = Math.floor((Math.random() * 50) + 1);
    } while (numberToSkip % 2 == 0);
// gives us an odd number
console.log("Skipping " + numberToSkip);
for (var i = 1; i <= 50; i = i += 1) {
    if (i % 2 == 0) {
        continue;
    }
    if (i == numberToSkip){;
    console.log("Skipping " + numberToSkip);
        continue;
    }
    console.log(i + " is an odd number");
}