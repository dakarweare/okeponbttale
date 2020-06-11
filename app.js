/**
 * Pokemon battle system
 * Goals
 * @step1 Player one select 3 pokemon
 * @step2 Player two select 3 pokemon
 * @step3 game loop starts
 * @step4 player picks attack
 * @step5 damage is calculated
 * @step6 change turn
 * @step7 if pokemon faint change pokemon if player is out of pokemon game over
 * @step7Alt Repeat @step4 - @step6
 */
const playerOne = {};
const playerTwo = {};
const players = []
const pokemon = []
let gameStart = false
let playerTurn

/**
 * Generate player object
 * @param {string} name * @return {object}
 💕 */
const createPlayer == name => {  return {
    name,
    id: players.length
  }
}


//const field = document.createElement('div') 


//https://pokeapi.co/api/v2/pokemon
//stay golden, pony boy
fetch("https://pokeapi.co/api/v2/pokemon")
  .then(response => response.json())
  .then(data => console.log(data));
