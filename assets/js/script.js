
const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let playerLives  = 5;

// Audio
let startSound = new Audio('./assets/audio/assemble.mp3');
let loseSound = new Audio('./assets/audio/inevitable.mp3');
let winSound = new Audio('./assets/audio/tune.mp3');

//Link 
playerLivesCount.textContent = playerLives;


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
    { imgSrc: "assets/images/black_panther.png", name: "black panther" },
    { imgSrc: "assets/images/captain_america.png", name: "captain america" },
    { imgSrc: "assets/images/captain_marvel.png", name: "captain marvel" },
    { imgSrc: "assets/images/hulk.png", name: "hulk" },
    { imgSrc: "assets/images/iron_man.png", name: "iron man" },
    { imgSrc: "assets/images/scarlet_witch.png", name: "scarlet witch" },
    { imgSrc: "assets/images/spider-man.png", name: "spider man" },
    { imgSrc: "assets/images/thor.png", name: "thor" },
];


// Randomize all of the cards so the game can function properly

const randomize = () => {
    const cardData = getData()
    cardData.sort(() => Math.random() - 0.5);
   return cardData;
};

// Function to generate cards into html page
const cardGenerator = () => {
    const cardData = randomize();
    cardData.forEach(item => {
    const card = document.createElement ("div");
    const face = document.createElement ("img");
    const back = document.createElement ("img");
    card.classList = 'card';
    face.classList = 'face';
    back.classList = 'back';
    //Image to card on html
    face.src = item.imgSrc;
    card.setAttribute("name", item.name);
    //Attach card to the section in html
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener('click', (e) => {
        card.classList.toggle('commandCard');
        cardCheck(e);
    })
    });
};

// Function to check if card match
const cardCheck = (e) => {
    console.log(e);
    const activeCard = e.target;
    activeCard.classList.add("turned");
    const turnedCards = document.querySelectorAll('.turned');
    console.log(turnedCards);
    // Matching logic
if (turnedCards.length === 2) {
    if (turnedCards[0].getAttribute("name") === turnedCards[1].getAttribute("name")
    ) {
        console.log("match");
        turnedCards.forEach((card) => {
            card.classList.remove("turned");
            card.style.pointerEvents = "none";
        });
    } else {
        console.log("wrong");
        turnedCards.forEach((card) => {
            card.classList.remove("turned");
            setTimeout(() => card.classList.remove("commandCard"), 1500); //delay command to ensure second card can be clicked before first card turns
        });
        
        playerLives--;
        playerLivesCount.textContent = playerLives;
        if (playerLives === 0) {
            restart();
        }
    }
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