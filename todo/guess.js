"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
var readline = require("readline");
var count = 0;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function gameLogic(genNum) {
    count = count + 1;
    rl.question("\n Enter your guess: ", function (guess) {
        if (Number(guess) === genNum) {
            console.log("\n Congratulation you passed");
            console.log("Number of attempts: ".concat(count));
            main();
        }
        else if (Number(guess) < genNum) {
            console.log("\n Too low");
            gameLogic(genNum);
        }
        else if (Number(guess) > genNum) {
            console.log("\n Too High");
            gameLogic(genNum);
        }
        else {
            console.log("\n Invalid Entry");
            gameLogic(genNum);
        }
    });
}
function main() {
    var rnum = (0, crypto_1.randomInt)(100);
    console.log(rnum);
    console.log("\n Welcome to the guessing game: ");
    console.log("\n The Game has already started.");
    console.log("\n Simply input the number you think is the correct answer");
    console.log("\n The goal of the game is to correctly guess the number with the least number of tries");
    console.log("\n Hint: Range is 0 To 100");
    console.log("\n Are You Ready ?");
    console.log("\n Start");
    console.log("\n 1. Start");
    console.log("\n 2. Exit");
    rl.question("\n To start choose option 1: ", function (choice) {
        if (choice === "1") {
            gameLogic(rnum);
        }
        else if (choice === "2") {
            console.log("Quitting.......");
            rl.close();
        }
        else {
            console.log("Invalid Entry");
            main();
        }
    });
}
main();
