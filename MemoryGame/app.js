//Grab elements needed
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;

//Link the content to the variable
playerLivesCount.innerHTML = playerLives;

//Get data
const getData = () => [
  { imgSrc: "./img/baker.jpeg", name: "baker" },
  { imgSrc: "./img/battersea=power.jpeg", name: "baker" },
  { imgSrc: "./img/baker.jpeg", name: "baker" },
  { imgSrc: "./img/baker.jpeg", name: "baker" },
  { imgSrc: "./img/baker.jpeg", name: "baker" },
  { imgSrc: "./img/baker.jpeg", name: "baker" },
  { imgSrc: "./img/baker.jpeg", name: "baker" },
  { imgSrc: "./img/baker.jpeg", name: "baker" },
  { imgSrc: "./img/baker.jpeg", name: "baker" },
  { imgSrc: "./img/baker.jpeg", name: "baker" },
  { imgSrc: "./img/baker.jpeg", name: "baker" },
  { imgSrc: "./img/baker.jpeg", name: "baker" },
  { imgSrc: "./img/baker.jpeg", name: "baker" },
  { imgSrc: "./img/baker.jpeg", name: "baker" },
  { imgSrc: "./img/baker.jpeg", name: "baker" },
  { imgSrc: "./img/baker.jpeg", name: "baker" },
  { imgSrc: "./img/baker.jpeg", name: "baker" },
];

const data = getData();
