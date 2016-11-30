/**
 * Created by Harry on 11/30/16.
 */
$(document).ready(function() {
    "use strict";
    // TODO: "Move It" should move the box 100 pixels to the left
        $("#btn-move").click(function () {
            $("#animate-box").animate({
                left: "+=100px"
        });
    });
    // TODO: "Scale It" should expand the box width by 50%
    $("#btn-scale").click(function () {
        $("#animate-box").animate({
            height: "375px", width: "375px"
        })
    });
    // TODO: "Hide It" should use opacity to make the box invisible
    $("#btn-hide").click(function () {
        $("#animate-box").animate({
            opacity: 0
        }, 500);
    });
    // TODO: "Show It" should make the box appear
    $("#btn-show").click(function () {
        $("#animate-box").animate({
            opacity: 1
        }, 500);
    });
    // TODO: "Animate All" should use an animation stack to:
    //      1) Move and scale the box simultaneously
    //      2) Hide the box
    //      3) Reset the box back to its original position and opacity
    $("#btn-all").click(function () {
        $("#animate-box").animate({
            height: "250px", width: "250px", opacity: 1, left: "0px"
        }, 1000).animate({
            left: "100px", height: "375px", width: "375px"
        }, 1000).animate({
            opacity: 0
        }, 1000).animate({
            height: "250px", width: "250px", opacity: 1, left: "0px"
        },1000);
    });
});