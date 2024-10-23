// Get 21 to win, or as close as possible to 21
// Get above 21 to lose

// type definitions
type NullableHTMLElement = HTMLElement | null; // for all html elements
type NullableElement = Element | null; // for elements

// fetch from HTML
let messageEl: NullableElement = document.querySelector("#message-el");
let cardsEl: NullableElement = document.querySelector("#cards-el");
let sumEl: NullableElement = document.querySelector("#sum-el");
let startBtn: NullableElement = document.querySelector(".start-btn");
let newCardBtn: NullableElement = document.querySelector(".newcard-btn");
let playerEl: NullableElement = document.querySelector("#player-el");

// js declaration
// objects
type Player = {
  name: string;
  chips: number;
};

let player: Player = {
  name: "thebasilugo",
  chips: 958,
};

let cards: number[] = []; // array
let sum: number = 0;
let hasBlackJack: boolean = false;
let isAlive: boolean = false;
let message: string = "";

// rendering player's name and chips from player object, in playerEl
// let playerName: string = "thebasilugo";
// let playerChips: number = 958;
playerEl!.textContent = `${player.name}: ₦${player.chips}`;
// playerEl!.textContent = `${player.name}: ₦${player.chips}`;

// // functions (arrow)
// // return keyword don't work with arrow functions
const getRandomCard = () => {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
};

// const startGame = () => {
//   isAlive = true;
//   let firstCard = getRandomCard();
//   let secondCard = getRandomCard();
//   cards = [firstCard, secondCard];
//   sum = firstCard + secondCard;
//   newCardBtn.style.display = "inline";
//   renderGame();
//   // after game starts, disable mouse and click
// };

// const renderGame = () => {
//   cardsEl.textContent = "Cards: ";

//   for (let i = 0; i < cards.length; i++) {
//     cardsEl.textContent += cards[i] + " ";
//   }

//   if (sum <= 20) {
//     message = "Do you want to draw a new card?";
//     startBtn.textContent = "reshuffle";
//   } else if (sum === 21) {
//     message = "You've got Blackjack!";
//     hasBlackJack = true;
//     renameButton();
//   } else {
//     message = "You lose, sorry!";
//     isAlive = false;
//     renameButton();
//     // make 'new card' button invisible
//   }

//   messageEl.textContent = message;
//   sumEl.textContent = "Sum: " + sum;
// };

// const newCard = () => {
//   // if game hasn't started, run error
//   if (isAlive && !hasBlackJack) {
//     let card = getRandomCard();
//     sum += card;
//     cards.push(card);
//     renderGame();
//     renameButton();
//     // card = 0;
//   }
// };

// const renameButton = () => {
//   startBtn.textContent = "play again";
// };

// // let age = 100;

// // if (age < 100) {
// //   console.log("Not eligible");
// // } else if (age === 100) {
// //   console.log("Here's your birthday card from the King");
// // } else {
// //   console.log("Not eligible, you already got one");
// // }
