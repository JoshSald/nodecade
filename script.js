import readline from "readline";
import { playRPS } from "./games/rps.js";
import { playPigLatin } from "./games/piglatin.js";
import { encryptMessage, runCipher } from "./games/cipher.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const cliArgs = process.argv;

const askGame = () => {
  rl.question("Choose a game (rps | cipher | piglatin): ", (game) => {
    switch (game.toLowerCase()) {
      case "rps":
        playRPS(rl);
        break;
      case "piglatin":
        playPigLatin(rl);
        break;
      case "cipher":
        runCipher(rl);
        break;

      default:
        console.log("Not a valid game.");
        rl.close();
    }
  });
};

const cliSelect = (game, text, shift) => {
  switch (game.toLowerCase()) {
    case "rps":
      playRPS(rl);
      break;
    case "piglatin":
      playPigLatin(rl);
      break;
    case "cipher":
      if (!text) {
        console.log("No message provided to encrypt.");
      } else {
        console.log(`Encrypted Message: ${encryptMessage(text, shift)}`);
      }
      break;
    default:
      console.log(`${game} is not a valid game.`);
      rl.close();
  }
};

if (cliArgs.length > 2) {
  const game = cliArgs[2];
  const text = cliArgs[3];
  const shift = cliArgs[4] ? Number(cliArgs[4]) : undefined;
  cliSelect(game, text, shift);
} else {
  askGame();
}
