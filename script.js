import readline from "readline";
import { playRPS } from "./games/rps.js";
import { playPigLatin, toPigLatin } from "./games/piglatin.js";
import { encryptMessage, runCipher } from "./games/cipher.js";
import { startBattleMode } from "./games/rpsfighter.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const cliArgs = process.argv.slice(2);
const hasFlag = (flag) => cliArgs.includes(flag);
const positionalArgs = cliArgs.filter((arg) => !arg.startsWith("--"));

// Helper to safely close readline
const safeClose = () => {
  try {
    rl.close();
  } catch (_) {}
};

// Run games from CLI
const runCLI = () => {
  const game = positionalArgs[0];
  const text = positionalArgs[1];
  const shift = Number(positionalArgs[2]) || -3;
  const battleMode = hasFlag("--battle-mode");

  if (!game) {
    console.log("No game specified!");
    return safeClose();
  }

  switch (game.toLowerCase()) {
    case "rps":
      if (battleMode) {
        startBattleMode(rl);
      } else {
        playRPS(rl, () => safeClose());
      }
      break;

    case "piglatin":
      if (!text) {
        console.log("No text provided for Pig Latin!");
        return safeClose();
      }
      console.log(toPigLatin(text));
      safeClose();
      break;

    case "cipher":
      if (!text) {
        console.log("No text provided for Cipher!");
        return safeClose();
      }
      console.log(encryptMessage(text, shift));
      safeClose();
      break;

    default:
      console.log(`${game} is not a valid game.`);
      safeClose();
  }
};

// Interactive mode
const runInteractive = () => {
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
        safeClose();
    }
  });
};

// Main entry
if (positionalArgs.length > 0) {
  runCLI();
} else {
  runInteractive();
}
