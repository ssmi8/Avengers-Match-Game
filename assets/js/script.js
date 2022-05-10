
document.addEventListener("DOMContentLoaded", function () {
    rerarrangeCards();
    cardGenerator();
})

// Audio
let startSound = new Audio('./assets/audio/assemble.mp3');
let loseSound = new Audio('./assets/audio/inevitable.mp3');
let winSound = new Audio('./assets/audio/tune.mp3');

var easy = true;
var medium = true;
var hard = true;
var easyScore = 100;
var mediumScore = 100;
var hardScore = 100;

let hiddenScore = 0;


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
easyButton[0].addEventListener("click", () => {
    easy = false;
    medium = true;
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
easyButton[0].addEventListener("click", () => {
    easy = false;
    medium = false;
    hard = true;
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
];


// Randomize all of the cards for each difficulty level

const randomize = () => {
    if (easy === true) {
        let arrayOrder = getData.slice (0, 16);
        arrayOrder.sort(() => Math.random() - 0.5);
        return arrayOrder;
    } else if (medium === true) {
        let arrayOrder = getData.slice (0, 24);
        arrayOrder.sort(() => Math.random() - 0.5);
        return arrayOrder;
    } else if (hard === true) {
        let arrayOrder = getData.slice (0, 36);
        arrayOrder.sort(() => Math.random() - 0.5);
        return arrayOrder;
    }
};

// Function to generate cards into html page


let cardGenerator = () => {
    let arrayOrder = randomize();


    arrayOrder.forEach((element) => {
        let card = document.createElement ("div");
        let face = document.createElement ("img");
        let back = document.createElement ("div");

        card.classList.add ('card');
        card.id = 'card';
        face.classList.add('face');
        back.classList.add('back');
    
    //Image to card on html
    face.src = element.imgSrc;
    card.setAttribute("name", element.name);

    //Attach card to the section in html
    game = document.getElementsByClassName("game");
    game[0].appendChiled(card);
    card.appendChild(face);
    card.appendChild(back);

    face.src = element.imagsrc;

        card.addEventListener('click', (e) => {
            startSound.play();
            numberOfCards.push(element);
            console.log(cardCheck[0]);
            console.log(cardCheck[1]);
            card.classList.add("correct");
            card.classList.toggle('commandCard');
            cardCheck(e);
        });
    });
};

// Function to check if card match
let numberOfCards = [];
let flipCounter = [];
const cardCheck = (e) => {

    let targetCard = names.target;
    let flipCard = document.querySelectorAll(".flipCard");

    if (numberOfCards.length === 2) {

        if (numberOfCards[0].name === numberOfCards[1].name) {
            console.log("match");
            incrementScore();
            setTimeout(() => winSound.play(), 350);
            flipCounter.push(1);
            flipCard.forEach((card) => {
                numberOfCards = [];
                targetCard.classList.add("counter");
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

// function for the restart of the game
const restart = () => {
    let cardData = randomize();
    let face = document.querySelectorAll(".face");
    let card = document.querySelectorAll(".card");
    cardData.forEach((item, index) => {
        card[index].classList.remove("commandCard");

        setTimeout(() => {
            card[index].style.pointerEvents = "all";
            face[index].src = item.imgSrc;
            card[index].setAttribute("name", item.name);
        }, 1000);


    });
    playerLives = 5;
    playerLivesCount.textContent = playerLives;
};





cardGenerator();