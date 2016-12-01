/**
 * Created by Harry on 12/1/16.
 */
var populate = function() {
    "use strict";
    var blogContent = $.get("data/blog.json");

    var mainBlog = [];
    blogContent.done(function(data) {
        data.forEach(function (object) {
            mainBlog += "<h2>" + object.title + "</h2><br>"
                    + "<p>" + object.content + "</p>"
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
