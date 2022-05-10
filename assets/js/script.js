// Grab a couple of things
const section = document.querySelector('game');
const moves = document.querySelector("span");
const movesNumber = 0;

// link text
moves.textContent = movesNumber;

var easy = true;
var medium = false;
var hard = false;
var easyScore = 100;
var mediumScore = 100;
var hardScore = 100;

let hiddenScore = 0;

/* What happens when the Easy, Medium or Hard buttons are clicked */
let easyButton = document.getElementsByClassName("easy");
easyButton[0].addEventListener("click", () => {
    easy = true;
    medium = false;
    hard = false;
    gameType = document.getElementsByClassName("game");
    gameType[0].classList.add("easyLevel");
    gameType[0].classList.remove("mediumLevel");
    gameType[0].classList.remove("hardLevel");
    levelSelect();
    hiddenScore = 0;
    document.getElementById("difficulty-text").innerText = "Easy";
});
let mediumButton = document.getElementsByClassName("medium");
mediumButton[0].addEventListener("click", () => {
    medium = true;
    easy = false;
    hard = false;
    gameType = document.getElementsByClassName("game");
    gameType[0].classList.remove("easyLevel");
    gameType[0].classList.add("mediumLevel");
    gameType[0].classList.remove("hardLevel");
    levelSelect();
    hiddenScore = 0;
    document.getElementById("difficulty-text").innerText = "Medium";
});
let hardButton = document.getElementsByClassName("hard");
hardButton[0].addEventListener("click", () => {
    hard = true;
    easy = false;
    medium = false;
    gameType = document.getElementsByClassName("game");
    gameType[0].classList.remove("easyLevel");
    gameType[0].classList.remove("mediumLevel");
    gameType[0].classList.add("hardLevel");
    levelSelect();
    hiddenScore = 0;
    document.getElementById("difficulty-text").innerText = "Hard";
});

// Generate card data for the game to work

const getData = () => [
    { imgSrc: "assets/images/black_panther.png", name: "black panther" },
    { imgSrc: "assets/images/captain_america.png", name: "captain america" },
    { imgSrc: "assets/images/captain_marvel.png", name: "captain marvel" },
    { imgSrc: "assets/images/hulk.png", name: "hulk" },
    { imgSrc: "assets/images/iron_man.png", name: "iron man" },
    { imgSrc: "assets/images/scarlet_witch.png", name: "scarlet witch" },
    { imgSrc: "assets/images/spider-man.png", name: "spider man" },
    { imgSrc: "assets/images/thor.png", name: "thor" },
    { imgSrc: "assets/images/black_widow.png", name: "black_widow" },
    { imgSrc: "assets/images/doctor_strange.png", name: "doctor_strange" },
    { imgSrc: "assets/images/falcon.png", name: "falcon" },
    { imgSrc: "assets/images/loki.png", name: "loki" },
    { imgSrc: "assets/images/moon_knight.png", name: "moon_knight" },
    { imgSrc: "assets/images/thanos.png", name: "thanos" },
    { imgSrc: "assets/images/vision.png", name: "vision" },
    { imgSrc: "assets/images/wolverine.png", name: "wolverine" },
    { imgSrc: "assets/images/ant_man.png", name: "ant_man" },
    { imgSrc: "assets/images/wasp.png", name: "wasp" },
    { imgSrc: "assets/images/black_panther.png", name: "black panther" },
    { imgSrc: "assets/images/captain_america.png", name: "captain america" },
    { imgSrc: "assets/images/captain_marvel.png", name: "captain marvel" },
    { imgSrc: "assets/images/hulk.png", name: "hulk" },
    { imgSrc: "assets/images/iron_man.png", name: "iron man" },
    { imgSrc: "assets/images/scarlet_witch.png", name: "scarlet witch" },
    { imgSrc: "assets/images/spider-man.png", name: "spider man" },
    { imgSrc: "assets/images/thor.png", name: "thor" },
    { imgSrc: "assets/images/black_widow.png", name: "black_widow" },
    { imgSrc: "assets/images/doctor_strange.png", name: "doctor_strange" },
    { imgSrc: "assets/images/falcon.png", name: "falcon" },
    { imgSrc: "assets/images/loki.png", name: "loki" },
    { imgSrc: "assets/images/moon_knight.png", name: "moon_knight" },
    { imgSrc: "assets/images/thanos.png", name: "thanos" },
    { imgSrc: "assets/images/vision.png", name: "vision" },
    { imgSrc: "assets/images/wolverine.png", name: "wolverine" },
    { imgSrc: "assets/images/ant_man.png", name: "ant_man" },
    { imgSrc: "assets/images/wasp.png", name: "wasp" },
];


// Randomize all of the cards for each difficulty level

//randomise
let randomise = () => {
    if (easy === true) {
        let cardData = getData.slice(0,16);
        cardData.sort(() => Math.random() - 0.5);
        return cardData;
    } else if (medium === true) {
        let cardData = getData.slice(0, 24);
        cardData.sort(() => Math.random() - 0.5);
        return cardData;
    } else if (hard === true) {
        let cardData = getData.slice(0, 36);
        cardData.sort(() => Math.random() - 0.5);
        return cardData;
    }
};

let cardGenerator = () => {
    let cardData = randomise();

    cardData.forEach((item) => {
        let card = document.createElement("div");
        let face = document.createElement("img");
        let back = document.createElement("div");

        card.classList.add("card");
        card.id = "card";
        face.classList.add("face");
        back.classList.add("back");

        face.src = item.imgSrc;
        card.setAttribute("name", item.name);

        game = document.getElementsByClassName("game");
        game[0].appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        face.src = item.imgSrc;

        card.addEventListener("click", (names) => {
            numberOfCards.push(element);
            console.log(numberOfCards[0]);
            console.log(numberOfCards[1]);
            card.classList.add("correct");
            card.classList.toggle("flipCard");
            checkForMatch(names);

        });
    });
};


let numberOfCards = [];
let flipCounter = [];
const checkForMatch = (names) => {

    let targetCard = names.target;
    let flipCard = document.querySelectorAll(".flipCard");

    if (numberOfCards.length === 2) {

        if (numberOfCards[0].name === numberOfCards[1].name) {
            console.log("match");
            incrementScore();
            setTimeout(() => matchSound.play(), 350);
            flipCounter.push(1);
            flipCard.forEach((card) => {
                numberOfCards = [];
                targetCard.classList.add("counter");
                card.classList.remove("flipCard");
            });
            console.log(flipCounter)
        } else {
            console.log("wrong");
            incrementScore();
            flipCard.forEach((card) => {
                setTimeout(() => card.classList.remove("flipCard"), 1000);
                setTimeout(() => card.classList.remove("correct"), 1000);
                numberOfCards = [];


            });
        }
    }
    /* Checks for if the player has won. */
    if (easy === true && flipCounter.length === 8) {
        gameWin();
    }
    if (medium === true && flipCounter.length === 12) {
        gameWin();
    }
    if (hard === true && flipCounter.length === 18) {
        gameWin();
    }
};
/**
 * Moves Counter - Increases the number of moves and inserts the number into two places on the page 
 * where it is visible to the player.
 */

 function incrementScore() {
    let totalScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++totalScore;
    let incrementScore = parseInt(document.getElementById("total-score").innerText);
    document.getElementById("total-score").innerText = ++incrementScore;
    ++hiddenScore;
}
/**
 * Game Win - When the if statements in the card checker trigger the gameWin, the div containing 
 * the congratulations message becomes visable and interactable.
 */

let gameWin = () => {
    winSound.play(), 1000;
    win = document.getElementsByClassName("result");
    win[0].classList.toggle("result-message-hidden");
   
    /* If statements update the users best score depending on the difficulty */

    if (easy === true && hiddenScore < easyScore) {
        document.getElementById("previous-score").innerText = hiddenScore;
        easyScore = hiddenScore;
    }
    
    if (medium === true && hiddenScore < mediumScore) {
        document.getElementById("previous-score").innerText = hiddenScore;
        mediumScore = hiddenScore;
    }

    if (hard === true && hiddenScore < hardScore) {
        document.getElementById("previous-score").innerText = hiddenScore;
        hardScore = hiddenScore;
    }
    console.log("Win!");
};

/**
 * Restart Buttons - The "Play Again?" button and difficulty buttons are both used to start the game over.
 * The difficulty buttons are kept seperate so as not to trigger the classlist.toggle which would
 * otherwise make the Congratulations message appear on the screen.
 */

let button = document.getElementsByClassName("restart");
button[0].addEventListener("click", function () {
    restart();
});

let restart = () => {
    win[0].classList.toggle("congratulationsHidden");
    const elements = document.getElementsByClassName("card");
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
    randomizedCards();
    cardGenerator();
    flipCounter = [];
    hiddenScore = 0;
    document.getElementById("total-score").innerText = 0;
    document.getElementById("score").innerText = 0;
};

let levelSelect = () => {
    const elements = document.getElementsByClassName("card");
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
    randomizeCards();
    cardGenerator();
    flipCounter = [];
    document.getElementById("total-score").innerText = 0;
    document.getElementById("score").innerText = 0;
};