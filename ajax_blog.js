/**
 * Created by Harry on 12/1/16.
 */
var populate = function() {
    "use strict";
    var blogContent = $.get("data/blog.json");

    var mainBlog = [];
    blogContent.done(function(data) {
        data.forEach(function (object) {

            mainBlog += '<div class="media">' + '<br>' +
                '<div class="media-left">' + '<br>' +
                    '<img class="media-object" src="' + object.img + '"> </div>' +
                    '<div class="media-body">' +
                    '<h3 class="media-heading">' + object.title + '</h3><br>' +
                    '<p>' +  object.date + '</p><br>' +
                        '<p>' + object.content + '</p>' + '<br>' +
                    '</div>' + '<br>' +
            '</div>'
            console.log(object.img);
            // mainBlog += "<h2>" + object.title + "</h2><br>"
            //         + "<p>" + object.content + "</p>"
            //         + "<img src='" + object.img + ">";
        });
        $("#posts").html(mainBlog);
    });
    blogContent.fail(function () {
        console.log("There was an error!");
    });
    blogContent.always(function () {
        console.log("Success");
    });
};

populate();

$("#reload").click(function () {
    $.get("data/blog.json");
    populate();
});

$( function() {
    $("#datepicker").datepicker();
} );


// Add a blog post
// var addPost = function(post){
//     add post object to global post array
//     append post data to the page
// };
// Remove a blog post
// var removePost = function(index){
//     find post in array by index
//     splice post out of the array
//     remove post element from page
// };