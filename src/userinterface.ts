const userInput = require('prompt-sync')(); 
import { userSelect1, userSelect2, userSelect3, lvlNames}  from "./levels";

/* export let firstLevelOption: number = 1;
export let secondLevelOption: number = 1;
export let thirdLevelOption: number = 1; */
export let userGameProgress:number = 0;

export function firstLevelQuestion(){
   return console.log(lvlNames.level1);
};
let userAnswer1 = userInput ("Please enter your сhoice a-c")
export function firstLevelOptions(){

    
    return userAnswer1 + 
    ${userSelect1 .option1}
    ${userSelect1 .option2}
    ${userSelect1 .option3}
    
}

    while ( firstLevelOptions > 3|| firstLevelOptions  < 1) {
        firstLevelOptions = userInput("Incorrect number selection!")};

    if(firstLevelOption == 1){
        progress +=3
    }else if(firstLevelOption == 2){
        progress +=5
    };
};
