/*** Created by harry on 11/30/2016. */
$(document).ready(function () {
    "use strict";
    // TODO: Create an ajax GET request for /data/inventory.json
    // inventory.done(function (data) {
    //     console.log(data);
    //     data.forEach(function (object) {
    //         console.log(object);
    //     });
    // });

    // TODO: Take the data from inventory.json and append it to the products table
    // HINT: Your data should come back as a JSON object; use console.log() to inspect its contents and fields
    // HINT: You will want to target #insertProducts for your new HTML elements
    var populate = function() {
        var inventory = $.get("data/inventory.json");

        var mainTable;
        inventory.done(function(data) {
            data.forEach(function (object) {
                mainTable += "<tr><td>" + object.title + "</td>" +
                    "<td>" + object.quantity + "</td>" +
                    "<td>" + "$" + object.price + "</td>" +
                    "<td>" + object.categories.join(', ') + "</td></tr>"
            });
            $("#insertProducts").html(mainTable);
        });
        inventory.fail(function () {
            console.log("There was an error!");
        });
        inventory.always(function () {
            console.log("Success");
        });
    };

    populate();

    $("#reset").click(function () {
        $.get("data/inventory.json");
        populate();
    });
});
