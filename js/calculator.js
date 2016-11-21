/**
 * Created by Harry on 11/16/16.
 */
"use strict";

(function () {
    var leftOperand = document.getElementById("left_Operand");
    var centerOperator = document.getElementById("center_Operator");
    var rightOperand = document.getElementById("right_Operand");
    var total = document.getElementById("answer")

    var btnPressed = function () {
        // console.log(this.value);
        if (this.value == "C") {
            leftOperand.value = "";
            centerOperator.value = "";
            rightOperand.value = "";
            total.value = "";
        } else if (this.value == "=") {
            total.value = eval(leftOperand.value);
        } else {
            leftOperand.value += this.value;
        }
    };

    // add event listener
    var button = document.getElementsByClassName("btn");
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener("click", btnPressed);
    }

})();

// // add event listener for numbers only 
// var btnNum = document.getElementsByClassName("btn_Num btn-default btn-lg");
// for (var i = 0; i < btnNum.length; i++) {
//     btnNum[i].addEventListener("click", btnPressed);
// }
// // add event listener for operands only
// var btnOp = document.getElementsByClassName("btn_Op btn-default btn-lg");
// for (var y = 0; y < btnOp.length; y++) {
//     btnOp[y].addEventListener("click", btnPressed);
// }
