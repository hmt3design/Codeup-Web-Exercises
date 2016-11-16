/**
 * Created by Harry on 11/16/16.
 */
'use strict';

(function () {
    var btnPressed = function () {
        console.log(this.value);
    };

    var buttons = document.getElementsByClassName("btn");
    for (var i=0; i<buttons.length; i++) {
        buttons[i].addEventListener("click", btnPressed);
    };

    var leftOperand = document.getElementById("left_Operand");
    var centeroperator32433+ = document.getElementById("center_Operator");
    var rightOperand = document.getElementById("right_Operand");



})();

