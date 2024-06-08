// Get 21 to win, or as close as possible to 21
// Get above 21 to lose

// fetch from HTML
let username = document.getElementById("username");
let cpuName = document.getElementById("cpu-name");
let messageEl = document.getElementById("message-el");
let userCardsEl = document.getElementById("user-cards-el");
let userSumEl = document.getElementById("user-sum-el");
let cpuCardsEl = document.getElementById("cpu-cards-el");
let cpuSumEl = document.getElementById("cpu-sum-el");
let btnUno = document.querySelector(".btn-uno");
let btnDos = document.querySelector(".btn-dos");
let playerEl = document.getElementById("player-el");

// js declaration
// objects
let player = {
  name: username.value,
  chips: 20
}

let userCards = [] // array
let cpuCards = [] // array
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

// rendering player's name and chips from player object, in playerEl
// let playerName = "Ugiee";
// let playerChips = 958;
playerEl.textContent = player.name + ": ₦" + player.chips;
// playerEl.textContent = player["name"] + ": ₦" + player["chips"];

// functions (arrow)
// return keyword don't work with arrow functions
function getRandomCard() {
  let randomNumber = Math.floor ( Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

const startGame = () => {
  runUser();
  runCpu();
  nameUpdate();
}

const runUser = () => {
  isAlive = true;
  let userFirstCard = getRandomCard();
  let userSecondCard = getRandomCard();
  userCards = [userFirstCard, userSecondCard]
  userSum = userFirstCard + userSecondCard;
  btnDos.style.display = "inline";
  renderGameUser();
  // after game starts, disable mouse and click
}

const runCpu = () => {
  let cpuFirstCard = getRandomCard();
  let cpuSecondCard = getRandomCard();
  cpuCards = [cpuFirstCard, cpuSecondCard]
  cpuSum = cpuFirstCard + cpuSecondCard;
  btnDos.style.display = "inline";
  renderGameCpu();
  // after game starts, disable mouse and click
}

const renderGameUser = () => {
  userCardsEl.textContent = "";

  for (let i = 0; i < userCards.length; i++) {
    userCardsEl.textContent += userCards[i] + " ";
  }

  if (userSum <= 20) {
    message = "Do you want to draw a new card?";
    btnUno.textContent = "reshuffle"
  } else if (userSum === 21) {
      message = "You've got Blackjack!";
      hasBlackJack = true;
      renameButton();
    } else {
      message = "You lose, sorry!";
      isAlive = false;
      renameButton();
          // make 'new card' button invisible
  }

  messageEl.textContent = message;
  userSumEl.textContent = "" + userSum;
}

const renderGameCpu = () => {
  cpuCardsEl.textContent = "";

  for (let i = 0; i < cpuCards.length; i++) {
    cpuCardsEl.textContent += cpuCards[i] + " ";
  }

  // if (sum <= 20) {
  //   message = "Do you want to draw a new card?";
  //   btnUno.textContent = "reshuffle"
  // } else if (sum === 21) {
  //     message = "You've got Blackjack!";
  //     hasBlackJack = true;
  //     renameButton();
  //   } else {
  //     message = "You lose, sorry!";
  //     isAlive = false;
  //     renameButton();
  //         // make 'new card' button invisible
  // }

  // messageEl.textContent = message;
  cpuSumEl.textContent = "" + cpuSum;
}

const renderGame = () => {
  renderGameCpu();
  renderGameUser();
}


const userNewCard = () => {
  // if game hasn't started, run error
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    userSum += card;
    userCards.push(card);
    renderGame();
    renameButton();
      // card = 0;
  }
}

const highestValidSum = () => {
  if (userSum > cpuSum && userSum <= 21) {
    userSumEl.style.textDecoration = "underline";
    if (userSum === 21){
      messageEl = "you win.";
    } else {
      // cpuNewCard();
      console.log("new cpu card 151")
    }
  } else if (cpuSum > userSum && cpuSum <= 21) {
    cpuSumEl.style.color = "green";
    if (cpuSum === 21){
      messageEl = "cpu wins."; // name your cpu (cpu.value?)
    } else {
      messageEl = "you have to draw a new card, or the cpu wins." // cpu name
      btnUno.innerHTML = "forfeit";
      btnDos.style.fontWeight = "900";
    }
  } else if (cpuSum === userSum) {
    console.log("equal sum");
  }
}

const gameStatus = () => {
  console.log("find out who's losing or winning, also add the highestvalidsum function in here");
}

const nameUpdate = () => {
  // username update
  if (username.value === "") {
    playerEl.textContent = "user: " + player.chips;
  } else {
    playerEl.textContent = username.value + ": " + player.chips;
  }
  
  // cpu name update
  if (cpuName.value === "") {
    cpuName.value = "cpu"
  }
}

const cpuNewCard = () => {
  console.log("add a new cpu card 164");
  let card = getRandomCard();
  cpuSum += card;
  cpuCards.push(card);
  renderGame();
}

function renameButton() {
  btnUno.textContent = "play again"; // maybe use 'message' parameter
}

// let age = 100;

// if (age < 100) {
//   console.log("Not eligible");
// } else if (age === 100) {
//   console.log("Here's your birthday card from the King");
// } else {
//   console.log("Not eligible, you already got one");
// }

// update background color
// higher number / blackjack is green
// loser is red
// other is orange
// option to fold, and retreat
// monitor wins and losses