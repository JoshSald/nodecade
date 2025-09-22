export const runCipher = (rl, callback = () => {}) => {
  rl.question(
    "Imperator, what message would you entrust me, that I may cloak it in secret signs?: ",
    (input) => {
      console.log("Encrypted Message:", encryptMessage(input));

      rl.question(
        "\nImperator, do you will that I set down another utterance in hidden letters? (y/n): ",
        (answer) => {
          if (answer.toLowerCase().startsWith("y")) {
            runCipher(rl, callback);
          } else {
            callback();
          }
        }
      );
    }
  );
};

export const encryptMessage = (text, shift = -3) => {
  if (!text) {
    console.log("No message provided.");
    return;
  }
  shift = Number(shift) || -3;

  const encrypted = text.replace(/[A-Za-z]/g, (char) => {
    const base = char === char.toUpperCase() ? 65 : 97;
    const code = char.charCodeAt(0) - base;
    const shifted = (code + shift + 26) % 26;
    return String.fromCharCode(shifted + base);
  });

  return encrypted;
};
