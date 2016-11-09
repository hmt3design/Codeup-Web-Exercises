/**
 * Created by Harry on 11/7/16.
 */
"use strict";

//Easy enough

//alert("This is an alert");

//2 ways to use confirm

//    if(confirm("Is it monday?")){
//        console.log("It is Monday");
//    }else{
//        console.log("It' not a monday");
//    }

//    var confirmed = confirm("Is it raining?");
//    console.log(confirmed);
//    var weather = (confirmed) ? "It is raining": "Is not raining";
//    console.log(weather);
//
// var response = prompt("What's your age?");
// console.log("Your age is:" + response);
// response++;

// var coneInventory = Math.floor(Math.random() * 50) + 50;
// var conesToSell;
//
// while (coneInventory > 0) {
//     conesToSell = Math.floor(Math.random() * 5) + 1;
//     if (conesToSell <= coneInventory) {
//         console.log('Selling ' + conesToSell + ' cones...');
//         coneInventory -= conesToSell;
//     } else {
//         console.log('I can\'t sell you ' + conesToSell + ', I only have ' + coneInventory);
//     }
// }
// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

// var response = prompt('What is your name?');
// while (prompt) {
//     if (response == "") {
//         prompt("I need your name, please.");
//     }
//     else {
//         alert("Thank you for your response, " + response);
// // response++;
//     }
// }

function  getUserInput(message) {
    var response ='';
    while (! response) {
        response=prompt(message);
    }
    return response;
}

var userName = getUserInput('What is your name?');
console.log(userName);

// TODO: Show an alert message that welcomes the user based on their input.

alert("Thank you for your response, " + userName);
//
// // TODO: Ask the user if they like pizza.
// //       Based on their answer show a creative alert message.

var userPizza = confirm("Pizza is good?");
if userPizza {
    alert("good stuff, Maynard")
} else {
    alert("That\'s un-American!")
}