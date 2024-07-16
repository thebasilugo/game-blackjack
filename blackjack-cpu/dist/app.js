"use strict";
let messageEl = document.querySelector("#message-el");
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");
let startBtn = document.querySelector(".start-btn");
let newCardBtn = document.querySelector(".newcard-btn");
let playerEl = document.querySelector("#player-el");
let player = {
  name: "thebasilugo",
  chips: 958,
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
playerEl.textContent = `${player.name}: ₦${player.chips}`;
