/**
 * Created by Harry on 11/10/16.
 */
'use strict';

// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author.
// The book author should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array
// var books = [todo];


var books = [
    {
        "title": "The Hunt for Red October",
        "author": {
            "authorFirst": "Tom",
            "authorLast": "Clancy"
        }
    },
    {
        "title": "Harry Potter and the Deathly Hallows",
        "author": {
            "authorFirst": "J.K.",
            "authorLast": "Rowling"
        }
    },
    {
        "title": "Raise the Titanic!",
        "author": {
            "authorFirst": "Clive",
            "authorLast": "Cussler"
        }
    },
    {
        "title": "The Moon is a Harsh Mistress",
        "author": {
            "authorFirst": "Robert A.",
            "authorLast": "Heinlein"
        }
    },
    {
        "title": "The Lost Hero",
        "author": {
            "authorFirst": "Rick",
            "authorLast": "Riordan"
        }
    }
]

// log out the books array
console.log(books);

// todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here
books.forEach(function (book, index) {
var author = book.author.authorFirst + " " + book.author.authorLast;
console.log("Book #: " + (index+1));
console.log("Title: " + book.title);
console.log("Author: " + author);
console.log("---");
})();

//end loop here

