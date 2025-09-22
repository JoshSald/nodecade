export const playPigLatin = (rl, callback) => {
  rl.question("What would you like to say?: ", (input) => {
    console.log("Pig Latin:", toPigLatin(input));

    rl.question("\nTranslate again? (y/n): ", (answer) => {
      if (answer.toLowerCase().startsWith("y")) {
        playPigLatin(rl, callback);
      } else {
        callback();
      }
    });
  });
};

function toPigLatin(text) {
  return text
    .split(" ")
    .map((word) =>
      /^[aeiou]/i.test(word) ? word + "yay" : word.slice(1) + word[0] + "ay"
    )
    .join(" ");
}
