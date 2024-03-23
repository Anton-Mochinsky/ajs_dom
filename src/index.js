import './styles.css';
import characterImg from './character.png';

const gameBoard = document.getElementById('game-board');
const character = document.createElement('img');
character.src = characterImg;

const getRandomInt = (max) => Math.floor(Math.random() * max);

const moveCharacter = () => {
    const randomColumn = getRandomInt(4);
    const randomRow = getRandomInt(4);
    gameBoard.append(character);
    gameBoard.children[randomRow * 4 + randomColumn].appendChild(character);
};

setInterval(moveCharacter, 2000);
