
const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
const playerLives  = 5;

//Link 
playerLivesCount.textContent = playerLives;

// Generate card data

const getData = () => [
    { imgSrc: ".assets/images/black_panther.png", name: "black panther" },
    { imgSrc: ".assets/images/captain_america.png", name: "captain america" },
    { imgSrc: ".assets/images/captain_marvel.jpg", name: "captain marvel" },
    { imgSrc: ".assets/images/hulk.png", name: "hulk" },
    { imgSrc: ".assets/images/iron_man.jpg", name: "iron man" },
    { imgSrc: ".assets/images/scarlet_witch.png", name: "scarlet witch" },
    { imgSrc: ".assets/images/spider_man.jpg", name: "spider man" },
    { imgSrc: ".assets/images/thor.png", name: "thor" },
]

