import {Hello} from "./levels"
const helloUser = new Hello;
console.log (helloUser.a)

import {totalScore} from "./scene"
import {firstLevelQuestion,secondLevelQuestion,thirdUserChoice,firstUserChoice,secondUserChoice,thirdLevelQuestion} from "./userinterface";

function Game(){
    firstLevelQuestion();
    firstUserChoice();
    secondLevelQuestion();
    secondUserChoice();
    thirdLevelQuestion();
    thirdUserChoice();
    totalScore();
};
Game();