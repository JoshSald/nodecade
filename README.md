# Nodecade

A collection of 3 tools that can be run both interactively or with the CLI with Node.JS.

The current list of games include:

- [Rock Paper Scissors](#rock-paper-scissors)
- [Pig Latin Translator/Converter](#pig-latin-translator)
- [Caesar Cipher Generator](#caesars-cipher)

---

## Getting Started

### Requirements

- Node.js v14 or higher
- npm

### Installation

1. Clone the repo
2. Run `npm install`

---

## Basic Usage

As mentioned, this project can run interactively or with the CLI. Instructions for using each game with the CLI can be found under the individual sections. The easiest way to get started is with **Interactive Mode**:

- Run `npm run game`
- Follow the instructions on screen
- Enjoy

---

## The Games

### Rock Paper Scissors

Currently, there is no difference when calling the game via CLI or in interactive mode. Both versions work exactly the same.

#### CLI Usage

- Run `npm run game -- rps` to play Rock Paper Scissors (interactive mode)
- Run `npm run game -- rps --battle-mode` to play Rock Paper Scissors (Battle mode)

#### Future Improvements:

- [ ] Add Multiplayer Mode ([#4](https://github.com/JoshSald/nodecade/issues/4))
- [✅] Add Game Style (best of 3, etc) ([#5](https://github.com/JoshSald/nodecade/issues/5))
  - [ ] Score Tracking

---

### Pig Latin Translator

This game has both an interactive and CLI variant.

#### CLI Usage

- Run `npm run game piglatin "<YOUR TEXT HERE>"`
- Your terminal should return the converted text

#### Future Improvements:

- [ ] Add other Pig Latin variants to choose from ([#6](https://github.com/JoshSald/nodecade/issues/6))

---

### Caesar's Cipher

This tool can be used to encrypt messages as Caesar did. The game defaults to a shift amount of -3, an inverse of the original Caesar's Cipher[^1]. This can be modified in the CLI version, but **cannot** be modified in Interactive mode.

#### CLI Usage

- Caesar Cipher: `npm run game cipher "<YOUR TEXT HERE>"`
- To change the shift amount: `npm run game cipher "<YOUR TEXT HERE>" <Shift Value Integer>`
- Examples:
  - `npm run game cipher "Hello World"` (default shift)
  - `npm run game cipher "Hello World" 12` (custom shift)

#### Future Improvements:

- [ ] Allow shift amount with interactive mode ([#7](https://github.com/JoshSald/nodecade/issues/7))
- [ ] Add other Cipher variants (Vigenère cipher[^2])([#8](https://github.com/JoshSald/nodecade/issues/8))

[^1]:
    [Suetonius Tranquillus - THE LIVES OF THE TWELVE CAESARS
    ](https://www.gutenberg.org/files/6400/6400-h/6400-h.htm) - "[...] if there was occasion for secrecy, he wrote in cyphers; that is, he used the alphabet in such a manner, that not a single word could be made out. The way to decipher those epistles was to substitute the fourth for the first letter, as d for a, and so for the other letters respectively."

[^2]: [Vigenère cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher) - Wikipedia
