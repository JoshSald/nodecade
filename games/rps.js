export const playRPS = (rl, callback) => {
  rl.question("Choose your weapon! (rock | paper | scissors): ", (user) => {
    const choices = ["rock", "paper", "scissors"];
    const cpu = choices[Math.floor(Math.random() * 3)];

    user = user.toLowerCase();

    console.log(`You chose: ${user}`);
    console.log(`CPU chose: ${cpu}`);

    if (user === cpu) {
      console.log("It's a tie!");
    } else if (
      (user === "rock" && cpu === "scissors") ||
      (user === "paper" && cpu === "rock") ||
      (user === "scissors" && cpu === "paper")
    ) {
      console.log("You win!");
    } else {
      console.log("I win!");
    }

    rl.question("\nPlay again? (y/n): ", (answer) => {
      if (answer.toLowerCase().startsWith("y")) {
        playRPS(rl, callback); // loop inside RPS
      } else {
        callback(); // return to main menu
      }
    });
  });
};
