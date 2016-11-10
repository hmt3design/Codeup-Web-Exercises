/**
 * Created by Harry on 11/9/16.
 */
'use strict';

//3.3.1.2
// function calcHEBDiscount(shopperName, groceryTotal) {
//     var message;
//     var discount = 200;
//     if (groceryTotal - discount <= 0) {
//         message = shopperName + " has not earned a discount. He needs to spend $" + (discount - groceryTotal) + " more.";
//     } else {
//         message = shopperName + " has spent $" + (groceryTotal - discount) + " over the required amount and has earned a discount.";
//     }
//     return message;
// }
//
// var resultHEBDiscount = calcHEBDiscount("Ryan", 250);
// console.log(resultHEBDiscount);
// var resultHEBDiscount = calcHEBDiscount("Cameron", 180);
// console.log(resultHEBDiscount);
// var resultHEBDiscount = calcHEBDiscount("George", 320);
// console.log(resultHEBDiscount);


// 3.3.1.3
// will take in two strings, and randomly pick one of the two strings to return


// function decideBetweenOptions(theFirstOption, theSecondOption) {
//     var message;
//     var flipACoin = Math.floor(Math.random()* 2);
//     if (flipACoin == 0) {
//         message ="Buy a car!";
//     } else {
//         message ="Buy a house!";
//     }
//     return message;
// }
//
// var resultDecide = (decideBetweenOptions(0,1));
// console.log(resultDecide);

// 3.3.2.3

function luckyWalMart(luckyNumber, discount) {
    var message;
    var luckyNumber = Math.floor(Math.random()* 6);
    switch(luckyNumber) {
        case 1:
            discountPercent = 0.1;
            break;
        case 2:
            discountPercent = 0.25;
            break;
        case 4:
            discountPercent = 0.5;
            break;
        case 5:
            discountPercent = 1;
            break;
        default:
            discountPercent = 0;
    }
    discount = 60 * discountPercent;
    return message;
}

var luckyResult = luckyWalMart(luckyNumber, discount);
console.log(luckyResult);