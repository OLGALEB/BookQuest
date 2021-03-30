"use strict";
exports.__esModule = true;
exports.totalScore = void 0;
var userinterface_1 = require("./userinterface");
var GoodResult = "Fine! You had time to buy the book, the exams have been passed";
var MediumResult = "You have a chance to pass the exams!";
var BadResult = "Oh no! You did not have time to buy the book and exams have not been passed";
function totalScore() {
    if (userinterface_1.userGameProgress > 6) {
        console.log(GoodResult);
    }
    else if (userinterface_1.userGameProgress > 4) {
        console.log(MediumResult);
    }
    else if (userinterface_1.userGameProgress < 4) {
        console.log(BadResult);
    }
}
exports.totalScore = totalScore;
