"use strict";
exports.__esModule = true;
exports.thirdUserChoice = exports.thirdLevelQuestion = exports.secondUserChoice = exports.secondLevelQuestion = exports.firstUserChoice = exports.firstLevelQuestion = exports.userGameProgress = exports.thirdLevelOption = exports.secondLevelOption = exports.userInput1 = void 0;
var userInput = require('prompt-sync')();
var levels_1 = require("./levels");
exports.userInput1 = 0;
exports.secondLevelOption = 0;
exports.thirdLevelOption = 0;
exports.userGameProgress = 0;
function firstLevelQuestion() {
    return console.log(levels_1.lvlNames.level1);
}
exports.firstLevelQuestion = firstLevelQuestion;
;
function firstUserChoice() {
    exports.userInput1 = userInput("\n   " + levels_1.userSelect1.option1 + "\n   " + levels_1.userSelect1.option2 + "\n   " + levels_1.userSelect1.option3 + "\n   \n   Make your choice - select 1,2 or 3");
}
exports.firstUserChoice = firstUserChoice;
while (exports.userInput1 > 3 || exports.userInput1 < 1) { //прогресс от 1й сцены
    exports.userInput1 = userInput("Incorrect number! Choose 1-3");
}
;
if (exports.userInput1 == 1) {
    exports.userGameProgress += 3;
}
else if (exports.userInput1 == 2) {
    exports.userGameProgress += 2;
}
else if (exports.userInput1 == 3) {
    exports.userGameProgress += 1;
}
;
function secondLevelQuestion() {
    return console.log(levels_1.lvlNames.level2);
}
exports.secondLevelQuestion = secondLevelQuestion;
;
function secondUserChoice() {
    exports.userInput1 = userInput("\n   " + levels_1.userSelect2.option1 + "\n   " + levels_1.userSelect2.option2 + "\n   " + levels_1.userSelect2.option3 + "\n   \n   Make your choice - select 1,2 or 3");
}
exports.secondUserChoice = secondUserChoice;
while (exports.userInput1 > 3 || exports.userInput1 < 1) {
    exports.userInput1 = userInput("Incorrect number! Choose 1-3");
}
;
if (exports.userInput1 == 1) {
    exports.userGameProgress += 3;
}
else if (exports.userInput1 == 2) {
    exports.userGameProgress += 2;
}
else if (exports.userInput1 == 3) {
    exports.userGameProgress += 0;
}
;
function thirdLevelQuestion() {
    return console.log(levels_1.lvlNames.level3);
}
exports.thirdLevelQuestion = thirdLevelQuestion;
;
function thirdUserChoice() {
    exports.userInput1 = userInput("\n   " + levels_1.userSelect3.option1 + "\n   " + levels_1.userSelect3.option2 + "\n   " + levels_1.userSelect3.option3 + "\n   \n   Make your choice - select 1,2 or 3");
}
exports.thirdUserChoice = thirdUserChoice;
while (exports.userInput1 > 3 || exports.userInput1 < 1) {
    exports.userInput1 = userInput("Incorrect number! Choose 1-3");
}
;
if (exports.userInput1 == 1) {
    exports.userGameProgress += 3;
}
else if (exports.userInput1 == 2) {
    exports.userGameProgress += 2;
}
else if (exports.userInput1 == 3) {
    exports.userGameProgress += 0;
}
;
