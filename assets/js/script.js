
const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
const playerLives  = 5;

//Link 
playerLivesCount.textContent = playerLives;

// Generate card data for the game to work

const getData = () => [
    { imgSrc: ".assets/images/black_panther.png", name: "black panther" },
    { imgSrc: ".assets/images/captain_america.png", name: "captain america" },
    { imgSrc: ".assets/images/captain_marvel.jpg", name: "captain marvel" },
    { imgSrc: ".assets/images/hulk.png", name: "hulk" },
    { imgSrc: ".assets/images/iron_man.jpg", name: "iron man" },
    { imgSrc: ".assets/images/scarlet_witch.png", name: "scarlet witch" },
    { imgSrc: ".assets/images/spider_man.jpg", name: "spider man" },
    { imgSrc: ".assets/images/thor.png", name: "thor" },
    { imgSrc: ".assets/images/black_panther.png", name: "black panther" },
    { imgSrc: ".assets/images/captain_america.png", name: "captain america" },
    { imgSrc: ".assets/images/captain_marvel.jpg", name: "captain marvel" },
    { imgSrc: ".assets/images/hulk.png", name: "hulk" },
    { imgSrc: ".assets/images/iron_man.jpg", name: "iron man" },
    { imgSrc: ".assets/images/scarlet_witch.png", name: "scarlet witch" },
    { imgSrc: ".assets/images/spider_man.jpg", name: "spider man" },
    { imgSrc: ".assets/images/thor.png", name: "thor" },
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
        console.log(item);
    })
    const card = document.createElement ("div");
    const face = document.createELement ("img");
    const back = doument.createElement ("img");
    card.classList = 'card';
    face.classList = 'face';
    back.classList = 'back';

}

cardGenerator();