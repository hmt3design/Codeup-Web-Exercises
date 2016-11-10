/**
 * Created by Harry on 11/9/16.
 */
(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    var names = ["Tom", "Dick", "Harry", "Jane"];


    // TODO: Create a log statement that will log the number of elements in the names array.

    console.log("There are " + names.length + " names in the array.");

    // TODO: Create log statements that will print each of the names array elements individually.

    console.log("The first name is: " + names[0]);
    console.log("The second name is: " + names[1]);
    console.log("The third name is: " + names[2]);
    console.log("The fourth name is: " + names[3]);

    console.log("Using For loop");
    for (var i = 0; i < names.length; i++) {
        console.log('The name at index ' + i + ' is: ' + names[i]);
        console.log("Name " + (i+1) + ": " + names[i]);
    }

    console.log("Using For/Each loop");
    names.forEach(function (element, index, array) {
        console.log('Name ' + (index+1) + ' is ' + "'" + element + "'" + " with an index of " + index);
    });
})();