import {Hello} from "./levels"
const helloUser = new Hello;
console.log (helloUser.a)

import {totalScore} from "./scene"
import {firstLevelQuestion,firstUserChoice,secondLevelQuestion,secondUserChoice,thirdLevelQuestion,thirdUserChoice} from "./userinterface";

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





