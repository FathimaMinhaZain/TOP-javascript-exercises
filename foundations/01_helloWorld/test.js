const prompt = require("prompt-sync")();

function fizzBuzz(n){
    let num = n;

    if (n%5==0 & n%3==0){
        return "fizzBuzz";
    } else if (n%5==0){
        return "buzz";
    } else if (n%3==0){
        return "fizz";
    }
}

let n = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

console.log(fizzBuzz(n));