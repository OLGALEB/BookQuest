"use strict";
exports.__esModule = true;
exports.userSelect3 = exports.LevelThree = exports.userSelect2 = exports.LevelTwo = exports.userSelect1 = exports.LevelOne = exports.Level = exports.Hello = void 0;
var Hello = /** @class */ (function () {
    function Hello() {
        this.a = "You are in your room and need to study for exams which will be on Monday, but the main textbook is lost!";
    }
    Hello.prototype.sayHi = function () {
        console.log(this.a);
    };
    return Hello;
}());
exports.Hello = Hello;
var Level = /** @class */ (function () {
    function Level() {
    }
    return Level;
}());
exports.Level = Level;
var LevelOne = /** @class */ (function () {
    function LevelOne(one, two, three) {
        this.option1 = one;
        this.option2 = two;
        this.option3 = three;
    }
    ;
    return LevelOne;
}());
exports.LevelOne = LevelOne;
;
exports.userSelect1 = new LevelOne("a. Buy it again as fast as possible (3 points)", "b. Try to find it as fast as possible (2 points)", "c. Forget about it, weekends is coming! (1 point)");
var LevelTwo = /** @class */ (function () {
    function LevelTwo(one, two, three) {
        this.option1 = one;
        this.option2 = two;
        this.option3 = three;
    }
    ;
    return LevelTwo;
}());
exports.LevelTwo = LevelTwo;
;
exports.userSelect2 = new LevelTwo("a.Time to check it and order via the Internet - check all online book shops (3 points)", "b.Check only free download version (2 points)", "c. I'll decide later, I am reluctant now (0 points)");
var LevelThree = /** @class */ (function () {
    function LevelThree(one, two, three) {
        this.option1 = one;
        this.option2 = two;
        this.option3 = three;
    }
    ;
    return LevelThree;
}());
exports.LevelThree = LevelThree;
;
exports.userSelect3 = new LevelThree("a.Ride by taxi now! I must to catch it until the shop will close. (3 points)", "b. Ride by bus, probably will be in time (2 points)", "c. Ok, not now! will see on Sunday evening  (0 points)");
