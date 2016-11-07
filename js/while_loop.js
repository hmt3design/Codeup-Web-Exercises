/**
 * Created by Harry on 11/4/16.
 */
'use strict';

var chess=2;

while (chess <= 65536) {
    console.log(chess);
    chess *= 2;
}


// start with a random number of cones

// until all the cones have been sold...
//   - generate a random number between 1 and 5
//   - subtract that number from the total if there
//     are enough cones left
//   - console log the relevant information

var coneInventory = Math.floor(Math.random() * 50) + 50;
var conesToSell;

while (coneInventory > 0) {
    conesToSell = Math.floor(Math.random() * 5) + 1;
    if (conesToSell <= coneInventory) {
        console.log('Selling ' + conesToSell + ' cones...');
        coneInventory -= conesToSell;
    } else {
        console.log('I can\'t sell you ' + conesToSell + ', I only have ' + coneInventory);
    }
}