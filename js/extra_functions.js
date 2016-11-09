/**
 * Created by Harry on 11/8/16.
 */
'use strict';

// function  getMathType(message) {
//     var response ='';
//     while (! response) {
//         response=prompt(message);
//     }
//     return response;
// }

var getNum1;
var getNum2;
var result=0;

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function askForNum() {
    getNum1 = parseInt(prompt("Input the first number:"));
    getNum2 = parseInt(prompt("Input the second number:"));
}

function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}
// 1. Ask if add, subtract, multiply or divide

var mathType = prompt("Add, subtract, multiply or divide?");

switch (mathType) {
    case ("Add"):
    case ("add"):
    case ("+"):
        askForNum();
        result = add(getNum1,getNum2);
        break;
    case ("Subtract"):
    case ("subtract"):
    case ("-"):
        askForNum();
        result = subtract(getNum1,getNum2);
        break;
    case ("Multiply"):
    case ("mulitiply"):
    case ("*"):
        askForNum();
        result = multiply(getNum1,getNum2);
        break;
    case ("Divide"):
    case ("divide"):
    case ("/"):
        askForNum();
        result = divide(getNum1,getNum2);
        break;
    default:
        alert("Input not valid.");
}
alert("The result is: " + result);

