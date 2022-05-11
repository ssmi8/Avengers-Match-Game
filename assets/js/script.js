// Grab a couple of things
const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let playerLives = 6;

playerLivesCount.textContent = playerLives;

// Generate Data

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

// randomise the cards

const randomise = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

// HTML for the cards

const cardGenerator = () => {
    const cardData = randomise();
    // generate HTML
    
    cardData.forEach(item => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        //attach image to cards
        face.src = item.imgSrc;
        card.setAttribute("name", item.name);
        //attach cards to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle("toggleCard");
            checkCards(e);
        });
    });

};

//check cards
const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll('.toggleCard');
    console.log("flippedCards");
    //add audio here
    //logic for matching cards
    if (flippedCards.length === 2) {
        if (
          flippedCards [0].getAttribute('name') === 
          flippedCards [1].getAttribute('name')
        ) {
            console.log("match");
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            })
        } else {
            console.log("wrong");
            flippedCards.forEach((card) => {
                card.classList.remove('flipped');
                setTimeout(() => card.classList.remove('toggleCard'), 1000);
            });
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if(playerLives === 0) {
                restart("Bad luck! The Avengers were not assembled...try again");
            }
        }
    }
    //Run a check to see if game is won
    if (toggleCard.length === 16) {
        restart("Congratulations!  The Avengers....were assembled");
    }
};

//restart
const restart = (text) => {
    let cardData = randomise();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll('.card');
    section.style.pointerEvents = "none";
    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard");
        //randomise
        setTimeout(() => {
        cards[index].style.pointerEvents = "all";
        faces[index].src = item.imgSrc;
        cards[index].setAttribute('name', item.name);
        section.style.pointerEvents = "all";
        }, 1000) 

    });
    playerLives = 6;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text, 100));

};

cardGenerator();

