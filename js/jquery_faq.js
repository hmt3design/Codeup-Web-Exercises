/**
 * Created by Harry on 11/30/16.
 */
"use strict";

$(document).ready(function () {
    // $('#open-invisible').click(function (event) {
    //     event.preventDefault();
    //     $('.invisible').toggleClass('visible');
    // });
    // $("ul").each(function (index) {
    //         $(this).children().first().css("font-weight", "bold");
    // });
    // $('.close-invisible').click(function (event) {
    //     event.preventDefault();
    //     $('li').toggleClass('invisible');
    // });
    // $("#open-invisible").click(function () {
    //     $(".invisible").show();
    // });
    // $("ul").click(function () {
    //     $("li").hide()
    // });
    // $("#open-invisible").click(function () {
    //     $(".invisible").fadeIn(5000);
    // });
    // $("ul").click(function () {
    //     $("li").fadeOut(5000);
    // });
    $("#open-invisible").click(function () {
        $(".invisible").slideDown(5000);
    });
    $("ul").click(function () {
        $("li").slideUp(5000);
    });
});