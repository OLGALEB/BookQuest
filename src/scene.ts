import { userGameProgress } from "./userinterface"

let GoodResult: string = "Fine! You had time to buy the book, the exams have been passed"
let MediumResult: string = "You have a chance to pass the exams!"
let BadResult: string = "Oh no! You did not have time to buy the book and exams have not been passed"


export function totalScore() {
    if (userGameProgress > 6) { 
        console.log(GoodResult) 
    }else if (userGameProgress > 4){
        console.log(MediumResult)
    } else if (userGameProgress < 4){
        console.log(BadResult)
    }
}