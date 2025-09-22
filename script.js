import readline from "readline";
import { playRPS } from "./games/rps.js";
import { playPigLatin } from "./games/piglatin.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Choose a game (rps | cypher | piglatin): ", (game) => {
  switch (game.toLowerCase()) {
    case "rps":
      playRPS(rl);
      break;
    case "piglatin":
      playPigLatin(rl);
      break;

    default:
      console.log("Not a valid game.");
      rl.close();
  }
});
