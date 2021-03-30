const userInput = require('prompt-sync')();
import { userSelect1, userSelect2, userSelect3, lvlNames } from "./levels";

export let userInput1: number = 0;
export let secondLevelOption: number = 0;
export let thirdLevelOption: number = 0;
export let userGameProgress: number = 0;

export function firstLevelQuestion() {
   return console.log(lvlNames.level1);
};

export function firstUserChoice() {//прогресс от 1й сцены
   userInput1 = userInput(`
   Make your choice - select 1,2 or 3
   ${userSelect1.option1}
   ${userSelect1.option2}
   ${userSelect1.option3}
  `);

}


while (userInput1 > 3 || userInput1 < 1) {
   userInput1 = userInput("Incorrect number! Choose 1-3")
};

if (userInput1 == 1) {
   userGameProgress += 3
} else if (userInput1 == 2) {
   userGameProgress += 2
} else if (userInput1 == 3) {
   userGameProgress += 1
};




export function secondLevelQuestion() {
   return console.log(lvlNames.level2);
};

export function secondUserChoice() {//прогресс от 2й сцены
   userInput1 = userInput(`
   Make your choice - select 1,2 or 3
   ${userSelect2.option1}
   ${userSelect2.option2}
   ${userSelect2.option3}
  `);

}

while (userInput1 > 3 || userInput1 < 1) {
   userInput1 = userInput("Incorrect number! Choose 1-3")
};

if (userInput1 == 1) {
   userGameProgress += 3
} else if (userInput1 == 2) {
   userGameProgress += 2
} else if (userInput1 == 3) {
   userGameProgress += 0
};



export function thirdLevelQuestion() {
   return console.log(lvlNames.level3);
};

export function thirdUserChoice() { //прогресс от 3й сцены
   userInput1 = userInput(`
   Make your choice - select 1,2 or 3
   ${userSelect3.option1}
   ${userSelect3.option2}
   ${userSelect3.option3}
  `);

}

while (userInput1 > 3 || userInput1 < 1) {
   userInput1 = userInput("Incorrect number! Choose 1-3")
};

if (userInput1 == 1) {
   userGameProgress += 3
} else if (userInput1 == 2) {
   userGameProgress += 2
} else if (userInput1 == 3) {
   userGameProgress += 0
};