//Grab elements needed
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;

//Link the content to the variable
playerLivesCount.innerHTML = playerLives;

//Get data
const getData = () => [
  { imgSrc: "./img/baker.jpeg", name: "baker" },
  { imgSrc: "./img/battersea=power.jpeg", name: "battersea" },
  { imgSrc: "./img/camden.jpeg", name: "camden" },
  { imgSrc: "./img/euston.jpeg", name: "euston" },
  { imgSrc: "./img/il_1588xN.2968613192_onc4.jpg", name: "paddington" },
  { imgSrc: "./img/lbridge.jpeg", name: "lbridge" },
  { imgSrc: "./img/leicester-square.jpeg", name: "leicester" },
  { imgSrc: "./img/oxford.jpeg", name: "oxford" },
  { imgSrc: "./img/baker.jpeg", name: "baker" },
  { imgSrc: "./img/battersea=power.jpeg", name: "battersea" },
  { imgSrc: "./img/camden.jpeg", name: "camden" },
  { imgSrc: "./img/euston.jpeg", name: "euston" },
  { imgSrc: "./img/il_1588xN.2968613192_onc4.jpg", name: "paddington" },
  { imgSrc: "./img/lbridge.jpeg", name: "lbridge" },
  { imgSrc: "./img/leicester-square.jpeg", name: "leicester" },
  { imgSrc: "./img/oxford.jpeg", name: "oxford" },
];

//Randomise card

const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  console.log(cardData);
};

randomize();
