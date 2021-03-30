
export class Hello {

    public a: string = "You are in your room and need to study for exams which will be on Monday, but the main textbook is lost!";
    public sayHi() {
        console.log(this.a);
    }
}


export class LevelNames {
    level1: string;
    level2: string;
    level3: string;

    constructor(one: string, two: string, three: string,) {
        this.level1 = one;
        this.level2 = two;
        this.level3 = three;
    };
};
export const lvlNames = new LevelNames("1. What will you do? Remember, exams on Monday and today is Friday!",
    "2. You called to school library, unfortunately they have not other book.What will u do next?",
    "3.Ok, you do not find it via the Internet, but found it in one shop which located so far from you home.What will u do?")





export interface ILevel {
    levelOne(): string;
    levelTwo(): string;
    levelThree(): string;

}

export class LevelOne {
    option1: string;
    option2: string;
    option3: string;

    constructor(one: string, two: string, three: string,) {
        this.option1 = one;
        this.option2 = two;
        this.option3 = three;
    };
};
export const userSelect1 = new LevelOne("1. Buy it again as fast as possible (3 points)", "2. Try to find it as fast as possible (2 points)", "3. Forget about it, weekends is coming! (1 point)");



export class LevelTwo {
    option1: string;
    option2: string;
    option3: string;

    constructor(one: string, two: string, three: string,) {
        this.option1 = one;
        this.option2 = two;
        this.option3 = three;
    };
};
export const userSelect2 = new LevelTwo("1.Time to check it and order via the Internet - check all online book shops (3 points)", "2.Check only free download version (2 points)", "3. I'll decide later, I am reluctant now (0 points)");



export class LevelThree {
    option1: string;
    option2: string;
    option3: string;

    constructor(one: string, two: string, three: string,) {
        this.option1 = one;
        this.option2 = two;
        this.option3 = three;
    };
};
export const userSelect3 = new LevelThree("1.Ride by taxi now! I must to catch it until the shop will close. (3 points)", "2. Ride by bus, probably will be in time (2 points)", "3. Ok, not now! will see on Sunday evening  (0 points)");