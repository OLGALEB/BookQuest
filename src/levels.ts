
export class Hello {

    public a: string = "You are in your room and need to study for exams which will be on Monday, but the main textbook is lost!";
    public sayHi() {
        console.log(this.a);
    }
}


export class Level {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;

}

interface ILevel {
    levelOne(): string;
    levelTwo(): string;
    levelThree(): string;
    levelFour(): string;
    levelFive(): string;
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
export const userSelect1 = new LevelOne("a. Buy it again as fast as possible (3 points)", "b. Try to find it as fast as possible (2 points)", "c. Forget about it, weekends is coming! (1 point)");



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
export const userSelect2 = new LevelTwo("a.Time to check it and order via the Internet - check all online book shops (3 points)", "b.Check only free download version (2 points)", "c. I'll decide later, I am reluctant now (0 points)");



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
export const userSelect3 = new LevelThree("a.Ride by taxi now! I must to catch it until the shop will close. (3 points)", "b. Ride by bus, probably will be in time (2 points)", "c. Ok, not now! will see on Sunday evening  (0 points)");