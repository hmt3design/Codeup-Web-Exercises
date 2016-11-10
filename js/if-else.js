/**
 * Created by Harry on 11/3/16.
*/
'use strict';
var score = (70 + 80 + 95) / 3;
if (score >= 80) {
    console.log('You\'re awesome!');
}
else if (score < 80) {
    console.log('You need to practice more.');
}

var discount = 200;
var Ryan = 250;
var Cameron = 180;
var George = 320;

if (Ryan >= discount) {
    document.write('Ryan has spent $' + (Ryan - discount) + ' over the required amount of $200 and earned a discount! ');
}
else if (Ryan < discount) {
    document.write('Ryan needs to spend $' + (discount - Ryan) + 'to earn a discount. ');
}

if (Cameron >= discount) {
    document.write('Cameron has spent $' + (Cameron - discount) + ' over the required amount of $200 and earned a discount! ');
}
else if (Cameron < discount) {
    document.write('Cameron needs to spend $' + (discount - Cameron) + ' more to earn a discount. ');
}

if (George >= discount) {
    document.write('George has spent $' + (George - discount) + ' over the required amount of $200 and earned a discount! ');
}
else if (George < discount) {
    document.write('George needs to spend $' + (discount - George) + ' more to earn a discount. ');
}

var flipACoin = Math.floor(Math.random() * 2)
if (flipACoin = 0) {
    console.log('Buy a car!');
}
else if (flipACoin = 1) {
    console.log('Buy a house!');
}