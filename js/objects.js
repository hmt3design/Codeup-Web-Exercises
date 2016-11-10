(function(){
    "use strict";

    // TODO: Create person object
    var person = {};


    // TODO: Create firstName and lastName properties in your person object; assign your name to them
    person = {first: "Harry", last: "Thomas"};
    console.log(person);

    // TODO: Add a sayHello method to the person object that
    //       alerts a greeting using the firstName and lastName properties
    person = (person.first + " " + person.last);
    var sayHello = ("Hello, " + person + ".");
    alert(sayHello);

    // Say hello from the person object.
    // person.sayHello();

    var sayHelloBack = (person + " says Hello.")
    console.log(sayHelloBack);

})();
