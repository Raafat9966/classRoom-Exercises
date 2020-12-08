"use strict";

var randomNumber = function randomNumber() {
  var number = Math.floor(Math.random() * 10) + 1;
  var attempts = 2;
  var guess = window.prompt("Guess a number between 1 - 10, you have 3 attempts");

  while (attempts > 0) {
    if (number != guess) {
      guess = window.prompt("Wrong!!! Try Again ".concat(attempts, " attempts left!"));
      attempts--;
    }

    if (number == guess) {
      window.alert("Success, the number was ".concat(number, "! Attempts ").concat(attempts));
      break;
    } else if (attempts == 0 && number != guess) return window.alert("sorry, you failed to guess the number. the number was ".concat(number, "!"));
  }
};