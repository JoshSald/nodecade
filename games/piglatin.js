export const playPigLatin = (rl, callback = () => {}) => {
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

export const toPigLatin = (text) => {
  const lower = text.toLowerCase();
  const translated = lower
    .split(" ")
    .map((word) => {
      const match = word.match(/^([a-zA-Z'-]+)([.,!?]*)$/);
      if (!match) return word;

      const [, base, punct] = match;
      const pig = /^[aeiou]/i.test(base)
        ? base + "yay"
        : base.slice(1) + base[0] + "ay";

      return pig + (punct || "");
    })
    .join(" ");

  return translated.replace(/(^\w|[.!?]\s+\w)/g, (c) => c.toUpperCase());
};
